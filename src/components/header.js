import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <h2 className="bookstore">Bookstore CMS</h2>
        <nav>
          <Link to="/" className="books">
            Books
          </Link>
          <Link to="/categories" className="categories">
            Categories
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
