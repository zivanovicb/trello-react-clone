import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import Button from '../components/Button';

import NameField from './RegisterNameField';
import EmailField from './RegisterEmailField';
import PasswordField from './PasswordField';
import * as firebase from 'firebase';

import {
  validateName,
  validateEmail,
  validatePassword,
  unvalidateName,
  unvalidateEmail,
  unvalidatePassword,
} from '../actions/registerFormActions';

class RegisterForm extends Component{

  // If field is validated, prop is true
  state = {
      name: false,
      email: false,
      password: false
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      ...nextProps.state
    })
  }

  handleSubmit = event => {
    const { emailVal,passwordVal } = this.state
    event.preventDefault();
    if(this.handleDisabled()){
      // TODO: Show an error
    }else{
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailVal, passwordVal)
        .then(() => {console.log('success')})
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorMessage)
      });
    }
  }
  handleDisabled = () => {
    const { name,email,password } = this.state
    if(name && email && password){
      return false
    }else{
      return true
    }
  }
  render(){
    const {name,email,password} = this.state
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit}>
        <NameField validate={this.props.validateName} unvalidate={this.props.unvalidateName}/>
        <EmailField validate={this.props.validateEmail} unvalidate={this.props.unvalidateEmail}/>
        <PasswordField validate={this.props.validatePassword} unvalidate={this.props.unvalidatePassword}/>

        <p className="terms">
          By proceeding to create your account and use Trello, you are agreeing to our Terms of Service and Privacy Policy. If you do not agree, you cannot use Trello.
        </p>
        <Button
          background={name && email && password ? 'green' : 'grey'}
          type="submit"
          >Create New Account</Button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    validateName: () => {
      dispatch(validateName())
    },
    validateEmail: (mail) => {
      dispatch(validateEmail(mail))
    },
    validatePassword: (password) => {
      dispatch(validatePassword(password))
    },
    unvalidateName: () => {
      dispatch(unvalidateName())
    },
    unvalidateEmail: () => {
      dispatch(unvalidateEmail())
    },
    unvalidatePassword: () => {
      dispatch(unvalidatePassword())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)
