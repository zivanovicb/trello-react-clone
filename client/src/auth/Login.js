import React, { Component } from 'react';

import LoginForm from './LoginForm';

export default class Login extends Component{
  render(){
    return(
      <div className="login">
        <div className="container">
          <h1>Log in to Trello</h1>
          <LoginForm/>
        </div>
      </div>

    )
  }
}
