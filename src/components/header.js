import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import userImg from '../asset/user.svg';

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
        <img src={userImg} alt="user-img" className="Mask" />
      </header>
    </div>
  );
}

export default Header;
