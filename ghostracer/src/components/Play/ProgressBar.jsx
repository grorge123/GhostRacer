import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';
import Pause from './Pause.jsx';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          wpm: 0,
          accuracy: 100,
          gameOver: false,
        }

        this.setWpm = this.setWpm.bind(this);
        this.setAccuracy = this.setAccuracy.bind(this);
        this.handleGameOver = this.handleGameOver.bind(this);

    }

    render() {
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
              <SpeedBar wpm={this.state.wpm} accuracy={this.state.accuracy}/>
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
              <TextInput setWpm={this.setWpm} gameOver={this.state.gameOver}handleGameOver={this.handleGameOver} setAccuracy={this.setAccuracy}/>

            </g>
          );
    };

    setWpm(updatedWpm) {
      this.setState({
        wpm: updatedWpm,
      });
    }

    setAccuracy(updatedAccuracy) {
      this.setState({
        accuracy: updatedAccuracy,
      });
    }

    handleGameOver() {
      const currentState = this.state.gameOver;
      this.setState({
        gameOver: !currentState,
      });
    }

    
}

export default ProgressBar;