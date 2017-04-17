import React, { Component } from 'react';

import Button from '../components/Button';
import GoogleLogin from './GoogleLogin';

import './LoginForm.css';

export default class LoginForm extends Component{
  render(){
    return(
      <form className="loginForm">
        <p>Email: <span>(or username)</span></p>
        <input
          type="text"
          name="username"
          placeholder="e.g., zivanovic.b1@hotmail.com"/>

        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="e.g., **********"/>

        <div className="submitArea">
          <Button background="green" href="/login">Log In</Button>
          <p>Forgot your password? <a href="/reset">Reset it.</a></p>
        </div>
        <GoogleLogin/>

      </form>

    )
  }
}
