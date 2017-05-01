import React, { Component } from 'react';

export default class PasswordField extends Component{

  state = {
    value: '',
    error: null
  }

  handleChange = event => {
    const { target: { value }} = event
    this.onValueChange(value)
  }

  onValueChange(value){
    const {validate,unvalidate} = this.props
    const error = this.getErrorMessage(value)
    if(error){
      unvalidate()
    }
    if(!error){
      validate(value)
    }
    this.setState({
      value,
      error
    })
  }

  handleBlur = event => {
    const {value} = this.state
    this.onValueChange(value)
  }

  getErrorMessage(value){
    if(value.length < 5){
      return `Password has to be at least 5 characters long`
    }
  }

  render(){
    const {error} = this.state
    return(
      <div>
        <p>Password</p>
        <div className="fieldWrapper">
          <input
            type="password"
            placeholder="e.g., ••••••••••••"
            onChange={this.handleChange}
          />
          { error ? (
            <div className="fieldTip">
              {error}
            </div>

          ) : (
            null
          )
          }
        </div>


      </div>
    )
  }
}
