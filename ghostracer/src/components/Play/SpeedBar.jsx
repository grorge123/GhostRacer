import React from 'react';
import * as Constants from './constants.js';

const SpeedBar = () => {

	const barWidth = Constants.skyAndGroundWidth;
    const textY = Constants.barYPosition - 10;
    const speed = 0;

    const textStyle = {
	    font: "40px monospace",
	    fill: "white",
	};
  	
  	return (
    	<text x={0} y={textY} style={textStyle}> {speed} WPM </text>
    );
};

export default SpeedBar;