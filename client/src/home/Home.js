import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import ReactCursorPosition from 'react-cursor-position';



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
    isAuthenticated: false,
    position: {
      x: 0,
      y: 0
    }
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

  onPositionChanged = (props) => {
    console.log(this.state)
    this.setState({...props})
  }
  render(){
    const { changeBoard } = this.props
    const { currentSlide, slides} = this.props.state
    const { isAuthenticated,position } = this.state

    return(
      <div style={{ 'width': '100%', 'max-width':'100%'}}>
        <ReactCursorPosition onPositionChanged={this.onPositionChanged} >
          <Header user={isAuthenticated}/>
          <Hero/>
          <InformationSection position={position} />
        </ReactCursorPosition>
        <BoardPreview
          changeBoard={changeBoard}
          currentSlide={currentSlide}
          slides={slides}
          />
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
