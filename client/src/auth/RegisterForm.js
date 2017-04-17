import React, { Component } from 'react';

import Button from '../components/Button';

export default class RegisterForm extends Component{
  render(){
    return(
      <form>
        <p>Name</p>
        <input type="text" placeholder="e.g., Branko Zivanovic"/>

        <p>Email</p>
        <input type="email" placeholder="e.g., zivanovic.b1@hotmail.com"/>

        <p>Password</p>
        <input type="password" placeholder="e.g., ••••••••••••"/>

        <p className="terms">
          By proceeding to create your account and use Trello, you are agreeing to our Terms of Service and Privacy Policy. If you do not agree, you cannot use Trello.
        </p>
        <Button
          background="grey">Create New Account</Button>
      </form>
    )
  }
}
