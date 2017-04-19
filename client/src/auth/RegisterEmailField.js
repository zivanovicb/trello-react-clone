import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

export default class RegisterNameField extends Component{

  state = {
    value: '',
    error: ''
  }

  handleChange = event => {
    const { target: { value }} = event
    this.setState({value})
  }

  onValueChange(value){
    const error = this.getErrorMessage(value)
    this.setState({value,error})
  }

  getErrorMessage(value){
    if(!value.length){
      return `Enter email address please!`
    }
    if(!isEmail(value)){
      return 'Email address is not valid. Please try again.'
    }
  }

  handleBlur = event => {
    const {value} = this.state
    this.onValueChange(value)
  }


  render(){
    const {error} = this.state
    return(
      <div>
        { error ? (
          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="e.g., zivanovic.b1@hotmail.com"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <div className="fieldTip">
              {error}
            </div>
          </div>

        ) : (
          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="e.g., zivanovic.b1@hotmail.com"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </div>
        )}
      </div>
    )
  }
}
