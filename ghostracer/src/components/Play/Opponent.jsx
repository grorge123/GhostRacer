import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';
import Pause from './Pause.jsx';

import {connect} from 'react-redux';

import './PlayerBar.css';

class PlayerBar extends React.Component {

    static propTypes = {
      wpm: PropTypes.number,
      gameState: PropTypes.number,
    }

    constructor(props) {
        super(props);

        this.state = {
          opponentOffsetChar: [0],
          opponentWpm: 85,
        }

        this.OppInterval = null;
    }

    componentDidMount() {
      if(this.props.gameState == 0) {
        this.OppInterval = setInterval(() => {
          const updateOffsetChar = (this.state.opponentWpm - this.props.wpm) * 5 * 40;
          const currentOffsetChar = this.state.opponentOffsetChar[0];
         
          if((updateOffsetChar-currentOffsetChar) && this.props.wpm && this.props.gameState == 1) {
            const diff = (updateOffsetChar-currentOffsetChar) / 1200;
              this.setState({
                opponentOffsetChar: [currentOffsetChar+diff],
              });
          }
         
        }, 37);
      }
    }

    componentDidUpdate() {

      if(this.props.gameState == 2) {
        clearInterval(this.OppInterval);
      }
      
    }
    componentWillUnmount() {
      console.log("unmount");
    }

    render() {

        const opponent1_division = {
          stroke: '#0090ff',
          fill: '#0090ff',
          strokeWidth: '3px',
        }

        const userName = "Alice";

        const barWidth = Constants.skyAndGroundWidth;
        const barYPosition = Constants.barYPosition;
        const barHeight = Constants.barHeight;

        const playerImg = ["https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv"];
        const playerX = Constants.startTypeX-150;
        const playerY = Constants.barYPosition+150;

        const opponentOffset = this.state.opponentOffsetChar;
        const opponentWidth = Constants.opponentWidth;
        const opponentHeight = Constants.opponentHeight;



        return (
          <g id="opponnent">
            <line
              x1={Constants.startTypeX+15+opponentOffset[0]}
              y1={barYPosition+barHeight}
              x2={Constants.startTypeX+15+opponentOffset[0]}
              y2={barYPosition}
              style={opponent1_division}
            />
            <foreignObject x={playerX+50+opponentOffset[0]} y={playerY} width={opponentWidth} height={opponentHeight}>
                <img src={playerImg[0]} width="100" alt="player img" />
                <div className="text-center"><span className="username">{userName}</span></div>
            </foreignObject>
          </g>
        );
    }

    
}

export default connect(state => ({
    wpm: state.playerStat.wpm,
    gameState: state.gameState.gameState,
}))(PlayerBar);
