import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';

class SpeedBar extends React.Component {
    static propTypes = {
        wpm: PropTypes.number,
        accuracy: PropTypes.number,
    };
    
    constructor(props) {
        super(props);
    }

    render() {
    	const barWidth = Constants.skyAndGroundWidth;
	    const textY = Constants.barYPosition - 10;
	    const speed = 0;

	    const textStyle = {
		    font: "40px monospace",
		    fill: "white",
		};
	  	
	  	return (
	  		<g>
	    	<text x={100} y={textY} style={textStyle}> WPM: {this.props.wpm} </text>
	    	<text x={-300} y={textY} style={textStyle}> Accuracy: {this.props.accuracy} </text>
	    	</g>
	    );
	};
}

	


export default SpeedBar;