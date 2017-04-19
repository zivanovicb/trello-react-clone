import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

import './Register.css';

export default class Register extends Component{
  getErrorMessage = value => {
    console.log(value)
  }
  render(){
    return(
      <div className="register auth">
        <div className="container">
          <h1>Create Trello Account</h1>
          <RegisterForm getErrorMessage={this.getErrorMessage}/>
        </div>
      </div>
    )
  }
}
