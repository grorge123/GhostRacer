/* Text input */

export function getParagraph(initialWords) {
	return {
		type:'@INPUT/START_GET_PARAGRAPH',
		initialWords,
	};
}


/* Player Stats */

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
const stat = {
	opponentSpeed: 60,
	opponentID: "Alice",
};
*/
export function setOpponent(stat) {
	return {
		type: '@PLAY/SET_OPPONENT',
		...stat,
	};
}

export function setMode(x) {
	return {
		type: '@PLAY/SET_OPPONENT',
		action: x
	};
}

export function addStake() { return { type: '@PLAY/ADD_STAKE' }; }
export function lessStake() { return { type: '@PLAY/LESS_STAKE' }; }