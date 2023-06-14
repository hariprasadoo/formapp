import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const { editBookById }: IBooksContext = useBooksContext();
  const [title, setTitle] = useState(book.title);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className='flex flex-col my-2 content-center' onSubmit={handleSubmit}>
      <input className='rounded-full p-1 text-slate-400' value={title} onChange={handleChange} />
      <button className=''>Save</button>
    </form>
  );
};
export default BookEdit;