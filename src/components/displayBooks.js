import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';
import './style.css';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const book = useSelector((state) => state.books);

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
            <div key={book.id} className="Lesson-Panel">
              <div>
                <ul className="data-list">
                  <li className="cat">{book.category}</li>
                  <li className="title">
                    <h4>{book.title}</h4>
                  </li>
                  <li className="list-item">{book.author}</li>
                </ul>
                <ul className="list">
                  <li className="list-item">Comments</li>
                  <li className="vertical-line" />
                  <li className="list-item">
                    <button
                      type="button"
                      className="remove"
                      onClick={() => handleRemove(book.id)}
                    >
                      Remove
                    </button>
                  </li>
                  <li className="vertical-line" />
                  <li className="list-item">Edit</li>
                </ul>
              </div>
              <ul className="list-center">
                <li>
                  <div className="Oval" />
                </li>
                <li>
                  <span className="percent">64%</span>
                  <br />
                  <span className="completed">Completed</span>
                </li>
              </ul>
              <div className="line-2" />
              <div>
                <ul className="chap-list">
                  <li className="current">Current Chapter</li>
                  <li>
                    <h5 className="chapter">Chapter 5</h5>
                  </li>
                  <li>
                    <button type="button" className="btn-update">
                      Update Progress
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="h-line" />
    </div>
  );
}

export default BookList;
