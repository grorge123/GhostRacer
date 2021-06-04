import React, { useState, useEffect, useRef } from 'react';
import {Button} from 'reactstrap';

import './Canvas.css';
import Sky from './Sky.jsx';
import Ground from './Ground.jsx';
import ProgressBar from './ProgressBar.jsx'
import TextInput from './TextInput.jsx';
import Pause from './Pause.jsx';

const Canvas = () => {
	const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  	
  	return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
    <Sky />
    <Ground />
    <ProgressBar />
    <Pause />
    </svg>
  );
};

export default Canvas;