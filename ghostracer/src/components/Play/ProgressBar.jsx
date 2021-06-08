import React from 'react';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';

const ProgressBar = () => {
  const groundStyle = {
    fill: '#e6e8e6',
  };

  const division = {
    stroke: '#fdca40',
    strokeWidth: '3px',
  };

  const barWidth = Constants.skyAndGroundWidth;
  const barYPosition = Constants.barYPosition;
  const barHeight = Constants.barHeight;

  return (
    <g id="progress">
      <SpeedBar />
      <rect
        id="progress-2"
        data-name="progress"
        style={groundStyle}
        x={barWidth / -2}
        y={barYPosition}
        width={barWidth}
        height={barHeight}
      />
      <line
        x1={barWidth / -2}
        y1={barYPosition}
        x2={barWidth / 2}
        y2={barYPosition}
        style={division}
      />
      <line
        x1={barWidth / -2}
        y1={barHeight + barYPosition}
        x2={barWidth / 2}
        y2={barHeight + barYPosition}
        style={division}
      />
      <TextInput />
    </g>
  );
};

export default ProgressBar;