import React, { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';
import { GoTrashcan, GoPencil } from "react-icons/go";

const BookShow: React.FC<{ book: IBook }> = ({ book }) => {
  const { deleteBookById }: IBooksContext = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className='flex flex-col bg-slate-900 m-2'>
      <img alt='books' src={`https://robohash.org/${book.id}?set=set5&size=180x180`} />
      <div>{content}</div>
      <div className='flex-row absolute content-center right'>
        <button className='rounded-full text-slate-400' onClick={handleEditClick}><GoPencil></GoPencil></button>
        <button className=' text-slate-400' onClick={handleDeleteClick}><GoTrashcan></GoTrashcan></button>
      </div>
    </div>
  );
};
export default BookShow;