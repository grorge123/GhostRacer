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
			<div id="game">
				<Canvas />
			</div>
		);
	}
}

export default Play;