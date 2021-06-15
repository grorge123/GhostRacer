import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import {connect} from 'react-redux';

import './Sky.css';

class Sky extends React.Component {

  static propTypes = {
    wpm: PropTypes.numer,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const skyStyle = {
      fill: '#30abef',
    };
    const skyWidth = Constants.skyAndGroundWidth;
    const gameHeight = 1200;

    const cloudX = 0;
    const cloudY = -550;
    const cloudWidth = 250;
    const cloudHeight = 200;

    return (
      <g>
        <rect
          style={skyStyle}
          x={skyWidth / -2}
          y={100 - gameHeight}
          width={skyWidth}
          height={gameHeight}
        />
        <foreignObject x={cloudX} y={cloudY} width={cloudWidth} height={cloudHeight}>
            <img src="images/cloud.svg" width="250" alt="player img" />
        </foreignObject>
        <foreignObject x={cloudX-300} y={cloudY} width={cloudWidth} height={cloudHeight}>
            <img src="images/cloud.svg" width="100" alt="player img" />
        </foreignObject>
        
      </g>
    );
  }
};

export default connect(state => ({
  ...state.playerStat.wpm,
}))(Sky);