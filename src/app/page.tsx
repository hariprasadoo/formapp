"use client";
import { useEffect, useContext } from 'react';
import BooksContext from './context/books'; 
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function Home() {
  const booksContext = useContext(BooksContext) as IBooksContext | undefined;
  const fetchBook: () => Promise<void> = booksContext?.fetchBook || (() => Promise.resolve());

  useEffect(() => {
    fetchBook();
  }, []);
  
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>home</h1>
      <BookList></BookList>
      <BookCreate></BookCreate>
    </main>
  );
}
