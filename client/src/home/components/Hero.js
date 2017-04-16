import React from 'react';

import './Hero.css';
import Button from '../../components/Button';
import colors from '../../components/colors';

const Hero = (props) => {
  return(
    <div className="hero">
      <div className="hero__content">
        <h1>
          Trello lets you work more collaboratively and get more done.
        </h1>
        <p>
          Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.
        </p>
        <Button background="green">Sign Up - It's Free.</Button>
        <p>
          Already using trello? <a href="">Log in.</a>
        </p>
      </div>

      <div className="bg-color"></div>
    </div>
  )
}

export default Hero;
