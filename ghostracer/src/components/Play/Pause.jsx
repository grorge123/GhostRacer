import React from 'react';
import * as Constants from './constants.js';

import './Pause.css';

const Pause = () => {

  const x = -570;
  const y = -550;

  const buttonStyle = {
    fill: '#fdca40',
  };

  const textStyle = {
  	font: '30px sans-serif',
  };

  return (
  	<g>
  		<defs>
		    <filter id="shadow" x="0" y="0" width="200%" height="200%">
		        <feOffset result="offOut" in="SourceAlpha" dx="3" dy="3" />
		        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
		        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
		    </filter>
	    </defs>
	    <circle style={buttonStyle} cx={x} cy={y} r="30" filter="url(#shadow)"/>
	    <text x={x-12} y={y+9} style={textStyle}> | | </text>
    </g>
  );
};

export default Pause;