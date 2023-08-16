import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Book key={index} title={book.title} author={book.author} />
      ))}
    </div>
  );
}
BookList.propTypes = {
  books: PropTypes.func.isRequired,
};

export default BookList;
