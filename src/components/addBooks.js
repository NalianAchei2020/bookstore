import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/books/booksSlice';
import './style.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category) {
      setMessage('Please fill in all fields');
      return;
    }
    dispatch(
      postBooks({
        item_id: uuidv4(),
        title,
        author,
        category,
      }),
    );
    setError(books.error);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h2 className="addbook">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <p>{message}</p>
        <p>{error}</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Category</option>
          <option>Fiction</option>
          <option>Culture</option>
          <option>Happiness</option>
          <option>Religion</option>
        </select>
        <button type="submit" className="btn-add">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
