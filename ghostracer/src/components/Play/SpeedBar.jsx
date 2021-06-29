import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from './constants.js';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Wave } from 'react-animated-text';

import {connect} from 'react-redux';

import './SpeedBar.css'

class SpeedBar extends React.Component {
    static propTypes = {
        wpm: PropTypes.number,
        accuracy: PropTypes.number,
        totalTime: PropTypes.number,
    };
    
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {

    }

    render() {
    	const barHeight = Constants.barHeight;
    	const speedX = 50;
	    const speedY = Constants.barYPosition - 10;
	    const progressWidth = 400;
    	const progressX = speedX + 80;
	    const accuracyX = Constants.startTypeX - 230;
	    const accuracyY = Constants.barYPosition - 20;

	    const wpmStyle = {
		    font: "40px Bevan",
		    fill: "white",
		};

		const wpmSmall = {
			font: "20px monospace",
		    fill: "white",
		}

		const textStyle = {
		    font: "80px Bevan",
		};

		const textSmall = {
			font: "20px monospace",
		    fill: "black",
		}

		const mode = ["danger", "warning", "success"];
		let color = 0;
		if(this.props.wpm > 70) {color = 0;}
		else if(this.props.wpm > 40) {color = 1;}
		else {color = 2;}
	  	
	  	return (
	  		<g>
	    		<text x={speedX} y={speedY} style={wpmStyle}>{this.props.wpm} </text>
	    		<text x={progressX} y={speedY-25} style={wpmSmall}>WPM</text>
	    		<foreignObject x={progressX} y={speedY-20} width={progressWidth} height={barHeight}>
	  			<ProgressBar variant={mode[color]} now={this.props.wpm} key={2} />
 				</foreignObject>

	    		<foreignObject fill="white" x={accuracyX} y={accuracyY} width={200} height={200} style={textStyle}>
	  				<div className={`text-center ${this.props.accuracy>95 ? "accuracy-fire":"accuracy-cool"}`}>
	  				<Wave
						text={`${this.props.accuracy}`}
						effect="pop"
						effectChange="1.5"
						iterations="infinite"
						speed="10"
					/>
					<p style={textSmall}>ACCURACY</p>
					</div>


 				</foreignObject>
	    	</g>
	    );
	};
}

	


export default connect(state => ({
  ...state.playerStat,
  ...state.gameState,
}))(SpeedBar);