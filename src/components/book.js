import React from 'react';
import Form from './form';

function Book() {
  return (
    <section className="Bookstore-CMS">
      <section className="booklist">
        <article>
          <div>
            <span>Action</span>
            <h3>The Hunger Games</h3>
            <span>Suzanne Collins</span>
            <br />
            <span>24% Completed</span>
            <br />
            <button type="button">Delete</button>
          </div>
          <br />
          <div>
            <span>Science Fiction</span>
            <h3>Dune</h3>
            <span>Suzanne Collins</span>
            <br />
            <span>50% Completed</span>
            <br />
            <button type="button">Delete</button>
          </div>
          <br />
          <div>
            <span>Economy</span>
            <h3>Capital in the Twenty-First Century</h3>
            <span>Suzanne Collins</span>
            <br />
            <span>64% Completed</span>
            <br />
            <button type="button">Delete</button>
          </div>
        </article>
      </section>
      <br />
      <br />
      <Form />
    </section>
  );
}

export default Book;
