import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

function BookList({ books, onDelete }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
BookList.propTypes = {
  books: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
