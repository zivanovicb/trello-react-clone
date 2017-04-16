import React from 'react';
import './Header.css';

import Button from './Button';

import Logo from './logo.svg';
import colors from './colors';

const Header = ({color}) => (
  <div className="header">
    <img className="logo" src={Logo} alt="Trello logo"/>
    <div className="header__cta">
      <Button
        background="blue"
        href="/login">Log In</Button>
      <Button
        background="green"
        href="/register">Register</Button>
    </div>
  </div>
)

export default Header;
