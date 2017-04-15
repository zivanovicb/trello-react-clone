import React from 'react';

import './MobileSection.css';

const MobileSection = (props) => (
  <div className="mobileSection">
    <div className="container">
      <h3>Always in sync</h3>
      <p>No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
      <div className="mobile-ics">
        <a href="">
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0c89bea1f934eadd07d8284fead760d6/btn-appstore.png"/>
        </a>
        <a href="">
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/2d8bf64328f6c2666c1d5a3558fd7042/btn-playstore.png"/>
        </a>
      </div>
    </div>
  </div>
)

export default MobileSection;
