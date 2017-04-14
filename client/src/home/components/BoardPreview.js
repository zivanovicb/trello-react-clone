import React from 'react';

import './BoardPreview.css';

const BoardPreview = (props) => {
  const { changeBoard, currentSlide, slides } = props;
  changeBoard()
  return(
    <div className="boardPreview">
      <div className="container">
        <p>{slides[currentSlide].text}</p>
        <img src={slides[currentSlide].img}/>
      </div>
      <CreateBoard/>
    </div>
  )
}

export default BoardPreview;
