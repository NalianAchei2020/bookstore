import React from 'react';
import BookList from '../components/displayBooks';
import BookForm from '../components/addBooks';

function Books() {
  return (
    <div className="container">
      <BookList />
      <BookForm />
    </div>
  );
}

export default Books;
