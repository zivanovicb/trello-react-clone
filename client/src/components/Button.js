import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({background,children,href,style}) => (
  <a style={style || {}} className={`btn btn-${background}`} href={href} >{children}</a>
)

Button.propTypes = {
  background: PropTypes.oneOf(['green','blue','red','purple','grey']),
  children: PropTypes.string.isRequired,
  href: PropTypes.string
}
export default Button;
