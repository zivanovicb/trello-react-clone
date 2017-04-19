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

  onValueChange(value = this.state.value){
    const error = this.getErrorMessage(value)
    this.setState({
      value,
      error
    })
    console.log(value,error)
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
        {error ? (
          <div>
            <p>Password</p>
            <div className="fieldWrapper">
              <input
                type="password"
                placeholder="e.g., ••••••••••••"
                onChange={this.handleChange}
              />
              <div className="fieldTip">
                {error}
              </div>
            </div>
          </div>

        ) : (
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="e.g., ••••••••••••"
              onChange={this.handleChange}
            />
          </div>
        )
      }
      </div>
    )
  }
}
