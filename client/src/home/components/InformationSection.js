import React, {Component} from 'react';

import Image from './information.jpg';
import './InformationSection.css';
import {Motion, spring,presets} from 'react-motion';


class InformationSection extends Component{
    _w = screen.width;
    render(){
      return(
        <div>
          <Motion defaultStyle={{w: this._w+150}} style={{w: spring(0,{stiffness: 120,damping:40})}}>
            {currSt => (
              <div>
                <div className="information-section">
                  <div className="container" style={{transform: `translate3d(${currSt.w}px,0,0)`}}>
                    <h3>Information At A Glance</h3>
                    <p>Dive into the details by adding comments, attachments, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
                    <img src={Image} alt="Information logo"/>
                  </div>
                </div>
              </div>
            )}
          </Motion>
        </div>
      )

    }
}



export default InformationSection;
