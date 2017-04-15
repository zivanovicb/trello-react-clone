import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({style,children}) => (
  <a className="btn" href="" style={style}>{children}</a>
)

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired
}
export default Button;
