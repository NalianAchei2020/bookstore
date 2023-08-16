import React from 'react';
import Form from './form';

function Book() {
  return (
    <section className="Bookstore-CMS">
      <section className="booklist">
        <article>
          <div>
            <span>Economy</span>
            <h3>Capital in the Twenty-First Century</h3>
            <span>Suzanne Collins</span>
            <br />
            <button type="button">Delete</button>
          </div>
          <br />
          <div>
            <span>Economy</span>
            <h3>Capital in the Twenty-First Century</h3>
            <span>Suzanne Collins</span>
            <br />
            <button type="button">Delete</button>
          </div>
          <br />
          <div>
            <span>Economy</span>
            <h3>Capital in the Twenty-First Century</h3>
            <span>Suzanne Collins</span>
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
