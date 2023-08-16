import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <div className="container">
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
