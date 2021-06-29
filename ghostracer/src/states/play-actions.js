/* Text input */

export function getParagraph(x) {
	return {
		type:'@INPUT/START_GET_PARAGRAPH',
		initialWords: x.text,
		hash: x.hash
	};
}


/* Player Stats */

export function resetGame() {
	return {
		type: '@PLAYER_STAT/RESET',
	};
}

export function setWpm(wpm) {
	return {
		type:'@PLAYER_STAT/SET_WMP',
		wpm
	};
}

export function setAccuracy(accuracy) {
	return {
		type:'@PLAYER_STAT/SET_ACCURACY',
		accuracy
	};
}

export function setTotalTime(totalTime) {
	return {
		type:'@PLAYER_STAT/SET_TOTAL_TIME',
		totalTime,
	};
}

/* Game State */
export function setGameHold() {
	return {
		type: '@GAME_STATE/GAME_HOLD'
	};
}

export function setGameStart() {
	return {
		type: '@GAME_STATE/GAME_START'
	};
}

export function setGameEnd() {
	return {
		type: '@GAME_STATE/GAME_END'
	};
}


/* Play State */
export function setResult(info) {
    return {
        type: '@PLAY/SET_RESULT',
        ...info
    }
}

/*
const x = {
	opponentSpeed: 60,
	opponentID: "Alice",
};
*/
export function setOpponent(x) {
	return {
		type: '@PLAY/SET_OPPONENT',
		action: x
	};
}

export function setMode(mode) {
	return {
		type: '@PLAY/SET_MODE',
		mode
	};
}

export function addStake() { return { type: '@PLAY/ADD_STAKE' }; }
export function lessStake() { return { type: '@PLAY/LESS_STAKE' }; }