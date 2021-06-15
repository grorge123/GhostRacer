import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';
import Pause from './Pause.jsx';

import {connect} from 'react-redux';

import './PlayerBar.css';

class PlayerBar extends React.Component {

    static PropTypes = {
      wpm: PropTypes.number,
    }

    constructor(props) {
        super(props);

        this.state = {
          opponentOffsetMultiply: [0],
        }
    }

    render() {
        const groundStyle = {
          fill: '#e6e8e6',
        };

        const division = {
          stroke: '#fdca40',
          strokeWidth: '3px',
        };

        const oponent1_division = {
          stroke: '#0090ff',
          strokeWidth: '3px',
        }

        const userName = "Alice";

        const barWidth = Constants.skyAndGroundWidth;
        const barYPosition = Constants.barYPosition;
        const barHeight = Constants.barHeight;

        const playerImg = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/365e45cb-f07a-4c88-a433-10e18063baad/d3iapfh-fc5d77be-fcf5-43a9-b676-83b7553bf246.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zNjVlNDVjYi1mMDdhLTRjODgtYTQzMy0xMGUxODA2M2JhYWQvZDNpYXBmaC1mYzVkNzdiZS1mY2Y1LTQzYTktYjY3Ni04M2I3NTUzYmYyNDYuZ2lmIn1dXX0.rrySX_gaiVqKQMHRVerWDvqInE6C5qFuLyvdCt6TCcw"];
        const playerX = Constants.startTypeX-150;
        const playerY = Constants.barYPosition+150;
        const playerWidth = Constants.playerWidth;
        const playerHeight = Constants.playerHeight;

        const opponentOffset = [40 * 10];
        const opponentWidth = Constants.opponentWidth;
        const opponentHeight = Constants.opponentHeight;



        return (
          <g id="progress">
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
            <line
              x1={Constants.startTypeX+15}
              y1={barYPosition+barHeight}
              x2={Constants.startTypeX+15}
              y2={barYPosition}
              style={division}
            />
            <line
              x1={Constants.startTypeX+15+opponentOffset[0]}
              y1={barYPosition+barHeight}
              x2={Constants.startTypeX+15+opponentOffset[0]}
              y2={barYPosition}
              style={oponent1_division}
            />
            <SpeedBar/>
            <TextInput/>

            <foreignObject x={playerX} y={playerY} width={playerWidth} height={playerHeight}>
                <img src={playerImg[0]} width="300" alt="player img" />
                <div className="text-center"><span className="username">{userName}</span></div>
            </foreignObject>

            <foreignObject x={playerX+50+opponentOffset[0]} y={playerY} width={opponentWidth} height={opponentHeight}>
                <img src={playerImg[0]} width="150" alt="player img" />
                <div className="text-center"><span className="username">{userName}</span></div>
            </foreignObject>
          </g>
        );
    }

    
}

export default connect((state) => {
  return state.playerStat.wpm;
})(PlayerBar);
