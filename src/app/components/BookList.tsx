import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

const BookList: React.FC = () => {
  const { books }: IBooksContext = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <div className='flex flex-grow'>
      {renderedBooks}
    </div>
  );
}
export default BookList;