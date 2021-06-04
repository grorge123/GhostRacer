import React from 'react';
import { useState, useEffect } from 'react';
import * as Constants from './constants.js';
import useKeyPress from './KeyPress.jsx';

import './TextInput.css'


const TextInput = () => {


  const barWidth = Constants.skyAndGroundWidth;
  const barHeight = Constants.barHeight;
  const textY = Constants.barYPosition+20;
  const startPosition = Constants.startTypeX;

  const textStyle = {
    font: "60px serif",
  };

  //typing editor
  const initialWords = "It is raining so hard outside. There is lightning and thunder. Good thing I dont need to go out. Yay!";
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  useKeyPress(key => {
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      if(leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }

      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      setCurrentChar(incomingChars.charAt(0));

      updatedIncomingChars = incomingChars.substring(1);
      if(updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars += ' ' + initialWords;
      }

      setIncomingChars(updatedIncomingChars);
    }


  });

  return (
    <foreignObject x={startPosition} y={textY} width={barWidth} height={barHeight}>
      <span className="currentChar text"> 
        {currentChar}
      </span>
      <span className="text"> 
        {incomingChars.substr(0, 50)}
      </span>
    </foreignObject>
  );
};

export default TextInput;