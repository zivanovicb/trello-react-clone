import React from 'react';

import './Button.css';

const Button = (props) => {
  const { background, color, children, fontWeight } = props

  if(!fontWeight)
    return <a className="btn" href="" style={{ 'background': background, 'color':color }}>{children}</a>
  else if(fontWeight == 'bold')
    return <a className="btn" href="" style={{ 'background': background, 'color':color, 'font-weight': 'bold' }}>{children}</a>
}

export default Button;
