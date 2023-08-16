import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, onDelete }) {
  const handleDelete = () => {
    onDelete(title);
  };
  return (
    <div>
      <h3>
        Title:
        {title}
      </h3>
      <p>
        Author:
        {author}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
