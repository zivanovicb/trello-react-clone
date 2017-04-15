import React from 'react';

import Image from './information.jpg';
import './InformationSection.css';

const InformationSection = (props) => (
  <div className="information-section">
    <div className="container">
      <h3>Information At A Glance</h3>
      <p>Dive into the details by adding comments, attachments, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
      <img src={Image} alt="Information logo"/>
    </div>
  </div>
)

export default InformationSection;
