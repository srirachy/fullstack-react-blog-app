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
  const [showHomeTooltip, setShowTempTooltip] = useState(true);
  const [showSignInTooltip, setSignInTooltip] = useState(true);
  const [showSignUpTooltip, setSignUpTooltip] = useState(true);

  return (
    <Nav>
      {/* will be logo */}
      <NavLink to="/" />
      <NavMenu>
        <NavLink to="/">
          {showHomeTooltip && (
            <Tooltip
              text="Home"
              id="homeTip"
              effect="solid"
              place="bottom"
            />
          )}
          <button
            data-tip
            data-for="homeTip"
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
              text="Add Post"
              id="postTip"
              effect="solid"
              place="bottom"
            />
          )}
          <button
            data-tip
            data-for="postTip"
            type="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => {
              setShowTooltip(false);
              setTimeout(() => setShowTooltip(true), 50);
            }}
          >
            {/* <span style={{ display: 'none' }}>
              submit link button
            </span> */}
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </NavLink>
        <NavLink
          onClick={(event) => event.preventDefault()}
          to="/sign-up"
          activestyle="true"
        >
          {showSignInTooltip && (
            <Tooltip
              text="Coming Soon"
              id="signInTip"
              effect="solid"
              place="bottom"
            />
          )}
          <button
            data-tip
            data-for="signInTip"
            type="button"
            onMouseEnter={() => setSignInTooltip(true)}
            onMouseLeave={() => {
              setSignInTooltip(false);
              setTimeout(() => setSignInTooltip(true), 50);
            }}
          >
            Sign In
          </button>
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink
          onClick={(event) => event.preventDefault()}
          to="/signin"
          data-tip
          data-for="signUpTip"
          type="button"
          onMouseEnter={() => setSignUpTooltip(true)}
          onMouseLeave={() => {
            setSignUpTooltip(false);
            setTimeout(() => setSignUpTooltip(true), 50);
          }}
        >
          {showSignUpTooltip && (
            <Tooltip
              text="Coming Soon"
              id="signUpTip"
              effect="solid"
              place="bottom"
            />
          )}
          Sign Up
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
