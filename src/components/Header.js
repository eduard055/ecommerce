import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Valorant E-Commerce Store</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/login">Login</Link>
      </nav>
      
    </header>
  );
}

export default Header;