import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import Button from '../components/Button';

import NameField from './RegisterNameField';
import EmailField from './RegisterEmailField';
import PasswordField from './PasswordField';

import {
  validateName,
  validateEmail,
  validatePassword,
  unvalidateName,
  unvalidateEmail,
  unvalidatePassword,
} from '../actions/registerFormActions';

class RegisterForm extends Component{

  // If field is validated, property is TRUE
  state = {
      name: false,
      email: false,
      password: false
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.state.name,
      email: nextProps.state.email,
      password: nextProps.state.password
    })
  }
  render(){
    const {name,email,password} = this.state

    return(
      <form>
        <NameField validate={this.props.validateName} unvalidate={this.props.unvalidateName}/>
        <EmailField validate={this.props.validateEmail} unvalidate={this.props.unvalidateEmail}/>
        <PasswordField validate={this.props.validatePassword} unvalidate={this.props.unvalidatePassword}/>

        <p className="terms">
          By proceeding to create your account and use Trello, you are agreeing to our Terms of Service and Privacy Policy. If you do not agree, you cannot use Trello.
        </p>
        <Button
          background={name && email && password ? 'green' : 'grey'}>Create New Account</Button>
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
    validateEmail: () => {
      dispatch(validateEmail())
    },
    validatePassword: () => {
      dispatch(validatePassword())
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
