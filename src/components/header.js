import React from 'react';
import './style.css';

function Header() {
  return (
    <div>
      <header>
        <h2 className="bookstore">Bookstore CMS</h2>
        <nav>
          <a href="/" className="books">
            Books
          </a>
          <a href="/categories" className="categories">
            Categories
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
