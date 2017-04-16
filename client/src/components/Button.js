import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({background,children}) => (
  <a className={`btn btn-${background}`} href="" >{children}</a>
)

Button.propTypes = {
  background: PropTypes.oneOf(['green','blue','red','purple']),
  children: PropTypes.string.isRequired
}
export default Button;
