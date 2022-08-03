import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <h1>Full-Stack React Blog</h1>
        </div>
        <div className="navbar__right">
          <h4>View Post</h4>
          <h4>Add Post</h4>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
