import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

import './TextInput.css'

class TextInput extends React.Component {
    static propTypes = {
        setAccuracy: PropTypes.func,
        setWpm: PropTypes.func,
        handleGameOver: PropTypes.func,
        gameOver: PropTypes.bool,
    };
    
    constructor(props) {
        super(props);

        this.state = {
          initialWords: "It is raining so hard outside. There is lightning and thunder. Good thing I dont need to go out. Yay!",
          keyPressed: null,
          leftPadding: new Array(20).fill(' ').join(''),
          outgoingChars: '',
          currentChar: '',
          incomingChars: '',
          startTime: null,
          wordCount: 0,
          typedChars: '',
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setKeyPressed = this.setKeyPressed.bind(this);
        this.removeKeyPressed = this.removeKeyPressed.bind(this);
        this.currentTime = this.currentTime.bind(this);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
    }

    componentDidMount() {
      const currentChar = this.state.initialWords.charAt(0);
      const incomingChars = this.state.initialWords.substr(1);
      this.setState({
        currentChar: currentChar,
        incomingChars: incomingChars,
      });
      this.setKeyPressed();
    }

    componentDidUpdate() {
      if(this.state.currentChar == '' && !this.props.gameOver) {
        console.log("gameover");
        this.removeKeyPressed();
        this.props.handleGameOver();
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
        </foreignObject>
      );
    };

    handleKeyPress(key) {
      const { initialWords, leftPadding, outgoingChars, currentChar, incomingChars, startTime, wordCount, typedChars} = this.state;

      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      let newleftPadding = leftPadding;
      let newCurrentChar = currentChar;
      let newStartTime = startTime;
      const updatedTypedChars = typedChars+key;

      this.setState({typedChars: updatedTypedChars,});

      if(!newStartTime) {
        newStartTime = this.currentTime();
      }

      if (key === currentChar) {
        if(leftPadding.length > 0) {
          newleftPadding = leftPadding.substr(1);
        }

        updatedOutgoingChars += currentChar;
        newCurrentChar = incomingChars.charAt(0);

        updatedIncomingChars = incomingChars.substring(1);
        // if(updatedIncomingChars.split(' ').length < 10) {
        //   updatedIncomingChars += ' ' + initialWords;
        // }

        this.setState({ 
          startTime: newStartTime,
          leftPadding: newleftPadding,
          incomingChars: updatedIncomingChars, 
          outgoingChars: updatedOutgoingChars,
          wordCount: wordCount+1,
          currentChar: newCurrentChar,
        });
        
      }

      if(startTime && key) {
        const durationInMinutes = (this.currentTime() - newStartTime) / 60000.0;
        const accuracy = (updatedOutgoingChars.length / updatedTypedChars.length).toFixed(2) * 100;
        this.props.setAccuracy(accuracy);
        this.props.setWpm(((wordCount + 1) / durationInMinutes / 5).toFixed(2));
      }
      
    }

    setKeyPressed() {
      console.log("setKeyPressed");
      window.addEventListener('keydown', ({key}) => { this.downHandler(key) });
      window.addEventListener('keyup', () => { this.upHandler() });
    }

    removeKeyPressed() {
      console.log("removeKeyPressed");
      window.removeEventListener('keydown', () => { this.downHandler(key) });
      window.removeEventListener('keyup', () => { this.upHandler() });
    }

    downHandler(key) {
      console.log(key);
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
    }
    

    currentTime() {
      return new Date().getTime();
    }

}

export default TextInput;