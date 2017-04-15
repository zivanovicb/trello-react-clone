import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import './BoardPreview.css';
import CreateBoard from '../../components/CreateBoard';

const CREATEBOARD_TEXT = 'From startups to Fortune 500 companies, Trello is the most visual way for teams to collaborate on any project.'

const BoardPreview = (props) => {
  const { changeBoard, currentSlide, slides } = props;
  // changeBoard()
  return(
    <div className="boardPreview">
      <div className="container">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={1000}>

          <div key={slides[currentSlide].key}>
            <p>{slides[currentSlide].text}</p>
            <img src={slides[currentSlide].img}/>
          </div>
        </CSSTransitionGroup>
      </div>
      <CreateBoard text={CREATEBOARD_TEXT}/>
    </div>
  )
}

export default BoardPreview;
