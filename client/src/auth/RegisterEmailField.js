import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

export default class RegisterNameField extends Component{

  state = {
    value: '',
    error: null
  }

  handleChange = event => {
    const { target: { value }} = event
    this.setState({value})
  }

  onValueChange(value){
    const {validate,unvalidate} = this.props
    const error = this.getErrorMessage(value)
    if(error){
      unvalidate()
    }
    if(!error){
      validate()
    }
    
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
          <p>Email</p>
          <div className="fieldWrapper">
            <input
              type="email"
              placeholder="e.g., zivanovic.b1@hotmail.com"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {error ? (
              <div className="fieldTip">
                {error}
              </div>

            ) : (null)}

          </div>
        </div>

    )
  }
}
