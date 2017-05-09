import React, { Component } from 'react';

import Button from '../components/Button';
import GoogleLogin from './GoogleLogin';

import './LoginForm.css';
import isEmail from 'validator/lib/isEmail';
import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

export default class LoginForm extends Component{
  state = {
    emailUsernameString: '',
    email: '',
    username: '',
    password: '',
    error: false,
    errorMessage: '',
    isAuthenticated: false
  }
  onSubmit(email,password){
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Success
        this.setState({isAuthenticated: true})
      }).catch((error) => {
        this.setState({error: true,errorMessage: error.message})
      });
  }
  handleSubmit = event => {
    const { emailUsernameString, email, username, password } = this.state

    event.preventDefault();
    if(isEmail(emailUsernameString)){
      this.setState({email: emailUsernameString.trim()},() => {
        this.onSubmit(this.state.email, this.state.password)
      })

    }else{
      this.setState({username: emailUsernameString})
    }
  }

  //
  // Handling changes
  //
  handleEmailUsernameChange = event => {
    const { value } = event.target
    this.setState({emailUsernameString: value})
  }
  handlePasswordChange = event => {
    const { value } = event.target
    this.setState({password: value})
  }

  render(){
    const {error,errorMessage,isAuthenticated} = this.state
    
    if(error){
      alert(errorMessage)
    }
    if(isAuthenticated){
      return <Redirect to='/'/>
    }
    return(
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <p>Email: <span>(or username)</span></p>
        <input
          type="text"
          name="username"
          placeholder="e.g., zivanovic.b1@hotmail.com"
          onChange={this.handleEmailUsernameChange}/>

        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="e.g., **********"
          onChange={this.handlePasswordChange}/>

        <div className="submitArea">
          <Button background="green" href="/login" type="submit">Log In</Button>
          <p>Forgot your password? <a href="/reset">Reset it.</a></p>
        </div>
        <GoogleLogin/>

      </form>

    )
  }
}
