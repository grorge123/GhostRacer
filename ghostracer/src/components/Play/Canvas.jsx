import React, { useState, useEffect, useRef } from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Canvas.css';
import Sky from './Sky.jsx';
import Ground from './Ground.jsx';
import PlayerBar from './PlayerBar.jsx'
import TextInput from './TextInput.jsx';


class Canvas extends React.Component {
  	
    constructor(props) {
        super(props);

      
    }

  	render() {
      const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
      
      return (
        <svg
          id="canvas"
          preserveAspectRatio="xMaxYMax none"
          viewBox={viewBox}
        >
        <Sky />
        <Ground />
        <PlayerBar />
        </svg>
      );
  };
}

export default Canvas;