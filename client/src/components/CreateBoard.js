import React from 'react';
import Button from './Button';

import colors from './colors';
import './CreateBoard.css';

const CreateBoard = (props) => (
  <div className="createBoard">
    <div className="bg"></div>
    <div className="createBoard__content">
      <p>{props.text}</p>
      <Button background="green">Create your Board</Button>
    </div>

  </div>
)

export default CreateBoard;
