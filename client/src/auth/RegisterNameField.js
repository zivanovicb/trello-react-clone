import React, { Component } from 'react';

export default class RegisterNameField extends Component{

  state = {
    value: ''
  }

  handleChange = event => {
    const { target: { value }} = event

    if(value.length){
      this.setState({value})
    }else{
      this.setState({value: ''})
    }
  }

  render(){
    return(
      <div>
        <p>Name</p>
        <input
          type="text"
          placeholder="e.g., Branko Zivanovic"
          onChange={this.handleChange}
          />
      </div>
    )
  }
}
