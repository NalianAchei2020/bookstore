import React from 'react';

function Form() {
  return (
    <section>
      <form>
        <h4>ADD NEW BOOK</h4>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </section>
  );
}

export default Form;
