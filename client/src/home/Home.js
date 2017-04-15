import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Hero from './components/Hero';
import BoardPreview from './components/BoardPreview';
import InformationSection from './components/InformationSection';
import RedSection from './components/RedSection';

import { changeBoard } from '../actions/boardActions';

class Home extends Component{
  render(){
    const { changeBoard } = this.props
    const { currentSlide, slides } = this.props.state

    return(
      <div style={{ 'width': '100%', 'max-width':'100%'}}>
        <Header/>
        <Hero/>
        <BoardPreview
          changeBoard={changeBoard}
          currentSlide={currentSlide}
          slides={slides}
          />
        <InformationSection />
        <RedSection/>
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
