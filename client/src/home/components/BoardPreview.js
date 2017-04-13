import React from 'react';

const BoardPreview = (props) => {
  const { changeBoard } = props;
  changeBoard()
  console.log(changeBoard())
  return(
    <div>
      <h1>
        THIS IS SOME BOARD
      </h1>
    </div>
  )
}

export default BoardPreview;
