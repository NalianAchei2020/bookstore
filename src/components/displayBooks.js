import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {books.map((book) => (
        <ul key={book.item_id}>
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
          <button type="button" onClick={() => handleRemove(book.item_id)}>
            Remove
          </button>
        </ul>
      ))}
    </div>
  );
}

export default BookList;
