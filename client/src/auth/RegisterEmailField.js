import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

export default class RegisterNameField extends Component{

  state = {
    value: '',
    validated: false
  }

  handleChange = event => {
    const { target: { value }} = event

    if(value.length && value.includes('@')){
      if(isEmail(value)){
        this.setState({validated:true})
      }else{
        this.setState({validated:false})
      }
      this.setState({value})
    }else{
      this.setState({value: ''})
    }
  }

  handleBlur = event => {
    const {value} = this.state

    if(value !== ''){
      if(isEmail(value)){
        this.setState({validated:true})
      }else{
        this.setState({validated:false})
      }
    }
  }


  render(){
    return(
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="e.g., zivanovic.b1@hotmail.com"
          onChange={this.handleChange}
          onBlur={this.handleBlur}/>
      </div>
    )
  }
}
