import React from 'react';

import Image from './purple.jpg';
import Button from '../../components/Button';
import colors from '../../components/colors';

import './ProductivitySection.css';

const ProductivitySection = (props) => (
  <div className="productivitySection">
    <div className="container-fluid pc-inner">
      <div className="left">
        <img src={Image} alt="Productivity image" />
      </div>
      <div className="right">
        <h3>A Productivity Platform</h3>
        <p>Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your team's unique business needs.</p>
        <Button background="purple">Power-Up your workflow!</Button>
      </div>
    </div>
  </div>
)

export default ProductivitySection;
