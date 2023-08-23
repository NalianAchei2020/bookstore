import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="container">
      <BookList />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
