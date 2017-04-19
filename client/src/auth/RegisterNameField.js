import React, { Component } from 'react';

export default class RegisterNameField extends Component{

  state = {
    value: '',
    error: null
  }

  handleChange = event => {
    const { target: { value }} = event
    this.onValueChange(value)
  }

  onValueChange(value){
    const error = this.getErrorMessage(value)
    this.setState({value,error})
  }

  handleBlur = event => {
    const {value} = this.state
    this.onValueChange(value);
  }
  getErrorMessage(value){
    if(!value.length){
      return `Please enter your name!`
    }
  }


  render(){
    const {error} = this.state
    return(
      <div>
        <p>Name</p>
        <div className="fieldWrapper">
          <input
            type="text"
            placeholder="e.g., Branko Zivanovic"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {error ? (
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
