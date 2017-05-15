import React from 'react';
import './Header.css';

import Button from './Button';

import Logo from '../Logo';
import colors from './colors';


const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Logo/>
        </div>
        <div className="header__cta">
          { props.user ? <Button background="blue" href="/">Profile</Button> :
          <div>
            <Button
              background="blue"
              href="/login">Log In
            </Button>
            <Button
              background="green"
              href="/register">Register
            </Button>

          </div>

          }
            </div>
          </div>

    </div>
  )
}


export default Header;
