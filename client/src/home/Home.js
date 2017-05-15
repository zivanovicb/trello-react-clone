import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import Header from '../components/Header';
import Hero from './components/Hero';
import BoardPreview from './components/BoardPreview';
import InformationSection from './components/InformationSection';
import RedSection from './components/RedSection';
import ProductivitySection from './components/ProductivitySection';
import MobileSection from './components/MobileSection';

import { changeBoard } from '../actions/boardActions';

class Home extends Component{
  state = {
    isAuthenticated: false
  }
  constructor(){
    super()
    this.isAuthenticated()
  }

  isAuthenticated = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({isAuthenticated:true})
      }else{
        this.setState({isAuthenticated:false})
      }
    })
  }

  render(){
    const { changeBoard } = this.props
    const { currentSlide, slides} = this.props.state
    const { isAuthenticated } = this.state

    return(
      <div style={{ 'width': '100%', 'max-width':'100%'}}>
        <Header user={isAuthenticated}/>
        <Hero/>
        <BoardPreview
          changeBoard={changeBoard}
          currentSlide={currentSlide}
          slides={slides}
          />
        <InformationSection />
        <RedSection/>
        <ProductivitySection />
        <MobileSection />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    'changeBoard': () => {
      dispatch(changeBoard())
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
