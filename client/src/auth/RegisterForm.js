import React, { Component } from 'react';

import Button from '../components/Button';


import NameField from './RegisterNameField';
import EmailField from './RegisterEmailField';
import PasswordField from './PasswordField';

export default class RegisterForm extends Component{

  state = {
    name: false,
    email: false,
    password: false
  }

  render(){

    return(
      <form>
        <NameField/>
        <EmailField/>
        <PasswordField/>

        <p className="terms">
          By proceeding to create your account and use Trello, you are agreeing to our Terms of Service and Privacy Policy. If you do not agree, you cannot use Trello.
        </p>
        <Button
          background="grey">Create New Account</Button>
      </form>
    )
  }
}
