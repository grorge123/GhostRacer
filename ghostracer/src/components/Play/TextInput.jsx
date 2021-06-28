import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import {connect} from 'react-redux';
import {getParagraph} from '../../states/play-actions.js';
import {setWpm, setAccuracy, setTotalTime} from '../../states/play-actions.js';
import {setGameHold, setGameStart, setGameEnd} from '../../states/play-actions.js';
import {setResult} from '../../states/play-actions.js';
import {withRouter} from 'react-router';

import './TextInput.css'

class TextInput extends React.Component {
    static propTypes = {
        initialWords: PropTypes.string,
        wpm: PropTypes.number,
        accuracy: PropTypes.number,
        totalTime: PropTypes.number,
        gameState: PropTypes.number,
        dispatch: PropTypes.func,

    };
    
    constructor(props) {
        super(props);

        this.state = {
          keyPressed: null,
          leftPadding: new Array(20).fill(' ').join(''),
          outgoingChars: '',
          currentChar: '',
          incomingChars: '',
          startTime: null,
          wordCount: 0,
          typedChars: '',
        }

        this.setInitialChar = this.setInitialChar.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setKeyPressed = this.setKeyPressed.bind(this);
        this.removeKeyPressed = this.removeKeyPressed.bind(this);
        this.currentTime = this.currentTime.bind(this);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        this.interval = null;
    }

    componentDidMount() {
      this.props.dispatch(setGameHold());
      this.setKeyPressed();
    }

    componentDidUpdate() {
      if(this.props.gameState == 0 && this.props.initialWords) {
        this.setInitialChar();

        this.interval = setInterval(() => {
          if(this.state.startTime && this.props.gameState == 1) {
            const durationInMinutes = (this.currentTime() - this.state.startTime) / 60000.0;
            const accuracy = Math.round((this.state.outgoingChars.length / this.state.typedChars.length) * 100);
            this.props.dispatch(setAccuracy(accuracy))
            if(durationInMinutes > 0.01) this.props.dispatch(setWpm(Math.round((this.state.wordCount) / durationInMinutes / 5)));
          }
        }, 500);

        this.props.dispatch(setGameStart());
      }

      if(this.state.currentChar == '' && this.props.gameState == 1) {
        console.log("gameover");
        clearInterval(this.interval);
        this.removeKeyPressed();
        this.props.dispatch(setTotalTime((this.currentTime() - this.state.startTime)/1000.0));
        this.props.dispatch(setGameEnd());
        if(this.props.mode == 'single')this.props.history.push('/');
        else this.props.history.push('/matchResult')
      }

      if(this.props.gameState == 2) {
        this.props.dispatch(setResult({
          wpm: this.props.wpm,
          accuracy: this.props.accuracy,
          time: this.props.totalTime,
        }));
      }
    }




    render() {
      const startPosition = Constants.startTypeX;
      const textY = Constants.barYPosition + 20;
      const barWidth = Constants.skyAndGroundWidth;
      const barHeight = Constants.barHeight;

      return (
        <foreignObject x={startPosition} y={textY} width={barWidth} height={barHeight}>
          <span className="currentChar text"> 
            {this.state.currentChar}
          </span>
          <span className="text"> 
            {this.state.incomingChars.substr(0, 50)}
          </span>
          <span className={`text ${this.props.gameState==2 ? '' : 'd-none'}`}> &nbsp;&nbsp;GAME OVER!!!!! </span>
        </foreignObject>
      );
    };

    setInitialChar() {
      const currentChar = this.props.initialWords.charAt(0);
      const incomingChars = this.props.initialWords.substr(1);
      this.setState({
        currentChar: currentChar,
        incomingChars: incomingChars,
      });
    }

    handleKeyPress(key) {
      const {leftPadding, outgoingChars, currentChar, incomingChars, startTime, wordCount, typedChars} = this.state;
      const initialWords = this.props.initialWords;

      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      let newLeftPadding = leftPadding;
      let newCurrentChar = currentChar;
      let newStartTime = startTime;
      const updatedTypedChars = typedChars+key;

      this.setState({
          typedChars: updatedTypedChars,
        });

      if(!newStartTime) {
        newStartTime = this.currentTime();
      }

      if (key === currentChar) {
        if(leftPadding.length > 0) {
          newLeftPadding = leftPadding.substr(1);
        }

        updatedOutgoingChars += currentChar;
        newCurrentChar = incomingChars.charAt(0);

        updatedIncomingChars = incomingChars.substring(1);
        // if(updatedIncomingChars.split(' ').length < 10) {
        //   updatedIncomingChars += ' ' + initialWords;
        // }

        this.setState({
          startTime: newStartTime,
          leftPadding: newLeftPadding,
          incomingChars: updatedIncomingChars,
          outgoingChars: updatedOutgoingChars,
          wordCount: wordCount+1,
          currentChar: newCurrentChar, 
          typedChars: updatedTypedChars,
        });
      
        
      }
      
    }

    setKeyPressed() {
      console.log("setKeyPressed");
      window.addEventListener('keydown', this.downHandler);
      window.addEventListener('keyup', this.upHandler );
    }

    removeKeyPressed() {
      console.log("removeKeyPressed");
      window.removeEventListener('keydown', this.downHandler);
      window.removeEventListener('keyup', this.upHandler);
    }

    downHandler({key}) {
      let keyPressed = this.state.keyPressed;
      if (keyPressed !== key && key.length === 1) {
        keyPressed = key;
        this.setState({
          keyPressed: keyPressed,
        });
        this.handleKeyPress(keyPressed);
        // callback && callback(key);
      }
    }

    upHandler(key) {
      let keyPressed = null
      this.setState({
        keyPressed: keyPressed,
      });
    }
    

    currentTime() {
      return new Date().getTime();
    }

}

export default connect(state => ({
  ...state.input,
  ...state.playerStat,
  ...state.gameState,
  ...state.history,
  mode: state.play.mode,
}))(withRouter(TextInput));