import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '15px 30px',
    background: 'rgba(0, 0, 0, 0.7)', 
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000
  }}>
    <Link to="/" style={{
      fontSize: '28px',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#ff5f6d',
      letterSpacing: '2px'
    }}>
      Stanch Car Rental
    </Link>
    <div>
      <Link to="/" style={{
        margin: '0 20px',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
      }}>
        Home
      </Link>
      <Link to="/search" style={{
        margin: '0 20px',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
      }}>
        Search
      </Link>
    </div>
  </nav>
);

export default Navbar;
