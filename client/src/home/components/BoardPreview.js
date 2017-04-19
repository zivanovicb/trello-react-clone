import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import './BoardPreview.css';
import CreateBoard from '../../components/CreateBoard';


import Boarding from './boarding.jpg';
import Marketing from './marketing.jpg';
import Sales from './sales.jpg';

const CREATEBOARD_TEXT = 'From startups to Fortune 500 companies, Trello is the most visual way for teams to collaborate on any project.'
const sl = [
  {
    text: 'The Marketing Team moves blog content through the editorial calendar all the way from "Writing" to "Published".',
    img: Marketing,
    key: 0
  },
  {
    text: 'Onboarding new employees is easy for the People Team since they share orientation details directly on a Trello board.',
    img: Boarding,
    key: 1
  },
  {
    text: 'The Sales Team updates the status of leads directly in the sales pipeline for all to see.',
    img: Sales,
    key: 2
  }
]

const BoardPreview = (props) => {
  const { changeBoard, currentSlide, slides } = props;
  return(
    <div className="boardPreview">
      <div className="container">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={1000}>

          {/* <div key={slides[currentSlide].key}>
            <p>{slides[currentSlide].text}</p>
            <img src={slides[currentSlide].img}/>
          </div> */}
        </CSSTransitionGroup>
      </div>
      <CreateBoard text={CREATEBOARD_TEXT}/>
    </div>
  )
}

export default BoardPreview;
