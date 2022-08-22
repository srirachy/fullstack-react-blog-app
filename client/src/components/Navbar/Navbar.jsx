import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  NavLink,
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
      <NavMenu>
        <NavLink to="/">
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
        <NavLink to="/submit" className="x-submitNavLink">
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
            <span style={{ display: 'none' }}>
              submit link button
            </span>
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </NavLink>
        <NavLink to="/sign-up" activestyle="true">
          Sign Up
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
