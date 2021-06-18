import React from 'react';
import PropTypes from 'prop-types';

import './Play.css';
import Canvas from './Canvas.jsx';

class Play extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="game" className="container">
				<h1 className="">New Game</h1>
				<Canvas />
			</div>
		);
	}
}

export default Play;