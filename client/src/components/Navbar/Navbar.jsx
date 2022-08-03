import React from 'react';
import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function Navbar() {
  return (
    <Nav>
      <NavLink to="/" />
      {/* <Bars /> */}
      <NavMenu>
        <NavLink to="/AddPost" activeStyle>
          Add Post
        </NavLink>
        <NavLink to="/ViewPost" activeStyle>
          View Post
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
