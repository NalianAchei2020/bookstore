import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="container">
      <BookList books={books} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
