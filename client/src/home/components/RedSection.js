import React from 'react';

import Button from '../../components/Button';

import Image from './redsection.jpg';
import colors from '../../components/colors';

import './RedSection.css';

const RedSection = (props) => (
  <div className="redSection">
    <div className="container-fluid rs-inner">
      <div className="left">
        <h3>Work With Any Team</h3>
        <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
        <Button background="red">Build your dream team</Button>
      </div>

      <div className="right">
        <img src={Image} alt="Red section image"/>
      </div>
    </div>


  </div>
)

export default RedSection;
