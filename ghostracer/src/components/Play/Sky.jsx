import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import {connect} from 'react-redux';

import './Sky.css';

class Sky extends React.Component {

  static propTypes = {
    wpm: PropTypes.number,
    gameState: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.state = {
      cloudX: 0,
    }

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.props.gameState == 1) {
        const cur = this.state.cloudX;
        this.setState({
          cloudX: cur-this.props.wpm/5,
        });
      }
    }, 37);
  }

  componentDidUpdate() {
    if(this.state.cloudX < -900) {
      this.state.cloudX = 1000;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const skyStyle = {
      fill: '#30abef',
    };
    const skyWidth = Constants.skyAndGroundWidth;
    const gameHeight = 2400;

    const cloudX = this.state.cloudX;
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
  wpm: state.playerStat.wpm,
  ...state.gameState,
}))(Sky);