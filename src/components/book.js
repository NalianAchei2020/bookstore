import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
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
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};

export default Book;
