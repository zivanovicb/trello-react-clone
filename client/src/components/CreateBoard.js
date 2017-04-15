import React from 'react';
import Button from './Button';

import colors from './colors';
import './CreateBoard.css';

const buttonStyles = {
  'background': colors.green,
  'color':'white',
  'fontWeight': 'bold',
  'margin': '25px 0'
}


const CreateBoard = (props) => (
  <div className="createBoard">
    <div className="bg"></div>
    <div className="createBoard__content">
      <p>{props.text}</p>
      <Button style={buttonStyles}>Create your Board</Button>
    </div>

  </div>
)

export default CreateBoard;
