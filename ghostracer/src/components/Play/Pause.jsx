// import React from 'react';
// import PropTypes from 'prop-types';
// import * as Constants from './constants.js';

// import './Pause.css';

// class Pause extends React.Component {
// 	static propTypes = {
// 		pause: PropTypes.bool,
// 		onPause: PropTypes.func,
// 	};

// 	constructor(props) {
// 		super(props);

// 		this.handleButtonClick = this.handleButtonClick.bind(this);
// 	}

// 	render() {
// 		const PauseX = -575;
// 	  const PauseY = -575;
// 	  const screenX = -575;
// 	  const screenY = -575;
// 	  const barWidth = Constants.skyAndGroundWidth;
// 	  const barHeight = Constants.barHeight;

// 	  return (
// 	  	<g>
// 	  	<foreignObject x={PauseX} y={PauseY} width={barWidth} height={barHeight}>
// 	      <button type="button" className="btn btn-warning btn-circle btn-md" onClick={this.handleButtonClick}>
// 	      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-pause" viewBox="1 5 16 16">
// 				  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
// 				</svg>
// 	      </button>
// 	    </foreignObject>

// 	     <svg width="400" height="180">
// 			  <rect x={screenX} y={screenY} rx="20" ry="20" width="150" height="150" `fill="yellow" opacity="0.5" />
// 			  {/*<foreignObject x={screenX} y={screenY} width={barWidth} height={barHeight}>

// 				</foreignObject>*/}
// 			</svg> 

// 	  	</g>
// 	  );
// 	}

// 	handleButtonClick() {
// 		this.props.onPause();
// 	}


// }

// export default Pause;