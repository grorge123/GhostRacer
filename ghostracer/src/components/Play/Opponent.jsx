import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import TextInput from './TextInput.jsx';
import SpeedBar from './SpeedBar.jsx';
import Pause from './Pause.jsx';
import Avatar from '../Avatar/avatar.jsx';

import {connect} from 'react-redux';
import {setOpponent} from '../../states/play-actions.js';

import './PlayerBar.css';

class PlayerBar extends React.Component {

    static propTypes = {
      wpm: PropTypes.number,
      gameState: PropTypes.number,
      oppWpm: PropTypes.number,
      oppID: PropTypes.string,
      dispatch: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
          opponentOffsetChar: [0],
        }

        this.OppInterval = null;
    }

    componentDidMount() {
      if(this.props.gameState == 0) {
        this.OppInterval = setInterval(() => {
          const updateOffsetChar = (this.props.oppWpm - this.props.wpm) * 5 * 40;
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

        const division = {
          stroke: '#ff5000',
          fill: '#ff5000',
          strokeWidth: '3px',
        }

        const userName = this.props.oppID;

        const barWidth = Constants.skyAndGroundWidth;
        const barYPosition = Constants.barYPosition;
        const barHeight = Constants.barHeight;

        const playerImg = "https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv";
        const playerX = Constants.playerX;
        const playerY = Constants.playerY;

        const opponentOffset = this.state.opponentOffsetChar;
        const opponentWidth = Constants.opponentWidth;
        const opponentHeight = Constants.opponentHeight;



        return (
          <g id="opponent">
            <foreignObject x={playerX+40+opponentOffset[0]} y={playerY} width={opponentWidth} height={opponentHeight}>
              {/*<img src={playerImg} width="150" alt="player img" />*/}
              <Avatar width={"6rem"} id="5"></Avatar>
              <div className="text-center"><span style={{backgroundColor: "#ff5000",}} className="username">{userName}</span></div>
            </foreignObject>
          </g>
        );
    }

    
}

export default connect(state => ({
    wpm: state.playerStat.wpm,
    gameState: state.gameState.gameState,
    oppWpm: state.play.opponentSpeed,
    oppID: state.play.opponentID,
}))(PlayerBar);
