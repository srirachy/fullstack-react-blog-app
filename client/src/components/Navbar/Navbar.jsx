import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Tooltip from '../../utils/Tooltip';

function Navbar() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showTempTooltip, setShowTempTooltip] = useState(true);
  return (
    <Nav>
      <NavLink to="/" />
      {/* <Bars /> */}
      <NavMenu>
        <NavLink to="/submit" activeStyle>
          {showTooltip && (
            <Tooltip
              text="add post"
              id="meowTip"
              effect="solid"
              place="bottom"
            />
          )}
          <button
            data-tip
            data-for="meowTip"
            type="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => {
              setShowTooltip(false);
              setTimeout(() => setShowTooltip(true), 50);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </NavLink>
        <NavLink to="/" activeStyle>
          {showTempTooltip && (
            <Tooltip
              text="placeholder"
              id="tempTip"
              effect="solid"
              place="bottom"
            />
          )}
          <button
            data-tip
            data-for="tempTip"
            type="button"
            onMouseEnter={() => setShowTempTooltip(true)}
            onMouseLeave={() => {
              setShowTempTooltip(false);
              setTimeout(() => setShowTempTooltip(true), 50);
            }}
          >
            <FontAwesomeIcon icon={faHouse} />
          </button>
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
