import React from 'react';
import './Header.css';

import Button from './Button';

import Logo from './logo.svg';
import colors from './colors';

const Header = (props) => (
  <div className="header">
    <img className="logo" src={Logo} alt="Trello logo"/>
    <div className="header__cta">
      <Button background={colors.darkblue} color="white">Log In</Button>
      <Button background={colors.green} color="white" fontWeight="bold">Register</Button>
    </div>
  </div>
)

export default Header;
