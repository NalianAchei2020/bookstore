import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const book = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBooks(id));
  };
  return (
    <div>
      {book.loading && <p>Loading...</p>}
      {!book.loading && book.error ? (
        <p>
          Error:
          {book.error}
        </p>
      ) : null}
      {!book.loading && books.length ? (
        <div>
          {books.map((book) => (
            <ul key={book.id}>
              <li>
                <h6> Title:</h6>
                {book.title}
              </li>
              <li>
                <h6>Author:</h6>
                {book.author}
              </li>
              <li>
                <h6>category:</h6>
                {book.category}
              </li>
              <button type="button" onClick={() => handleRemove(book.id)}>
                Remove
              </button>
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default BookList;
