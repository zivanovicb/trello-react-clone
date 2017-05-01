import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({background,children,href,style,type}) => {
    if(type === "submit"){
      return <input
                className={`btn btn-${background}`}
                type="submit"
                value={children}
              />
    }else{
      return <a style={style || {}} className={`btn btn-${background}`} href={href} >{children}</a>
    }
}

Button.propTypes = {
  background: PropTypes.oneOf(['green','blue','red','purple','grey']),
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.string
}
export default Button;
