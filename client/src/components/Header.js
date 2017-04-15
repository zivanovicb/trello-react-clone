import React from 'react';
import './Header.css';

import Button from './Button';

import Logo from './logo.svg';
import colors from './colors';

const logButton = {
  background: colors.darkblue,
  color: 'white'
}

const regButton = {
  background: colors.green,
  color: 'white',
  fontWeight: 'bold'
}
const Header = (props) => (
  <div className="header">
    <img className="logo" src={Logo} alt="Trello logo"/>
    <div className="header__cta">
      <Button style={logButton}>Log In</Button>
      <Button style={regButton}>Register</Button>
    </div>
  </div>
)

export default Header;
