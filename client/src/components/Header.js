import React from 'react';
import './Header.css';

import Button from './Button';

import Logo from '../Logo';
import colors from './colors';

const Header = ({color}) => (
  <div className="header">
    <div className="logo">
      <Logo/>
    </div>
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
