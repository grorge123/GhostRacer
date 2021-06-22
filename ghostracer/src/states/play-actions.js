/* Text input */

export function getParagraph() {
	const initialWords = "It is raining so hard outside. There is lightning and thunder. Good thing I dont need to go out. Yay!"
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

export function setOpponent() {
	const stat = {
		opponentSpeed: 60,
		opponentID: "Alice",
	};

	return {
		type: '@PLAY/SET_OPPONENT',
		...stat,
	};
}
