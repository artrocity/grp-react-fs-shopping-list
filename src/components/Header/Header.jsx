import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <header className="banner-header">
      <h1>My Shopping List</h1>
      <ShoppingCartIcon />
    </header>
  );
}

export default Header;
