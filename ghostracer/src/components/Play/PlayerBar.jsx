import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';
import Pause from './Pause.jsx';
import Opponent from './Opponent.jsx';

import {connect} from 'react-redux';

import './PlayerBar.css';

class PlayerBar extends React.Component {

    static propTypes = {
      wpm: PropTypes.number,
      gameState: PropTypes.number,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

      // const updateOffsetChar = (this.state.opponentWpm - this.props.wpm) * 5;
      // console.log(this.state.opponentOffsetChar[0]);
      // console.log(this.props.wpm);
      // if(updateOffsetChar != this.state.opponentOffsetChar[0]) {
      //   this.setState({
      //     opponentOffsetChar: [updateOffsetChar],
      //   });

      // }
    }

    componentDidUpdate() {
      
    }

    render() {
        const groundStyle = {
          fill: '#e6e8e6',
        };

        const division = {
          stroke: '#fdca40',
          strokeWidth: '3px',
        };


        const userName = "Alice";

        const barWidth = Constants.skyAndGroundWidth;
        const barYPosition = Constants.barYPosition;
        const barHeight = Constants.barHeight;

        const playerImg = ["https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv"];
        const playerX = Constants.startTypeX-150;
        const playerY = Constants.barYPosition+150;
        const playerWidth = Constants.playerWidth;
        const playerHeight = Constants.playerHeight;

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
            
            <SpeedBar/>

            <foreignObject x={playerX} y={playerY} width={playerWidth} height={playerHeight}>
                <img src={playerImg[0]} width="250" alt="player img" />
                <div className="text-center"><span className="username">{userName}</span></div>
            </foreignObject>

            <Opponent />
            <TextInput/>
          </g>
        );
    }

    
}

export default connect(state => ({
    wpm: state.playerStat.wpm,
    gameState: state.gameState.gameState,
}))(PlayerBar);
