import React from 'react';
import { useSelector } from 'react-redux';

function Book() {
  const books = useSelector((state) => state.books.books);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <ul key={book.id}>
          <li>{book.title}</li>
          <li>{book.author}</li>
          <li>{book.category}</li>
          <button type="button">Delete</button>
        </ul>
      ))}
    </div>
  );
}

export default Book;
