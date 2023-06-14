"use client";
import React, { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext<IBooksContext | undefined>(undefined);

const Provider: React.FC<IProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const fetchBook = async () => {
    const response = await axios.get<IBook[]>('http://localhost:3001/books');
    setBooks(response.data);
  };
  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put<IBook>(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const createBook = async (title: string) => {
    const response = await axios.post<IBook>('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const valueToShare: IBooksContext = {
    books,
    fetchBook,
    editBookById,
    deleteBookById,
    createBook
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};
export { Provider };
export default BooksContext;