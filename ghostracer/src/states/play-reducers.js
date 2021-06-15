/* TextInput state */
const initInputState = {
	initialWords: "",
}

export function input(state = initInputState, action) {
	switch (action.type) {
		case '@INPUT/START_GET_PARAGRAPH':
			return {
				...state,
				initialWords: action.initialWords,
			};
		default:
			return state;
		
	}
}

/* PlayerBar state */
const initPlayerStats = {
	wpm: 0,
	accuracy: 100,
	totalTime: 0,
}

export function playerStat(state = initPlayerStats, action) {
	switch (action.type) {
		case '@PLAYER_STAT/SET_WMP':
			return {
				...state,
				wpm: action.wpm,
			};
		case '@PLAYER_STAT/SET_ACCURACY':
			return {
				...state,
				accuracy: action.accuracy,
			};
		case '@PLAYER_STAT/SET_TOTAL_TIME':
			return {
				...state,
				totalTime: action.totalTime,
			};
		default:
			return state;
	}
}

/* game state */
const initGameState = {
	gameState: 0,
}

//gameState -- 0: hold; 1: start; 2: end
export function gameState(state = initGameState, action) {
	switch (action.type) {
		case '@GAME_STATE/GAME_HOLD':
			return {gameState: 0};
		case '@GAME_STATE/GAME_START':
			return {gameState: 1};
		case '@GAME_STATE/GAME_END':
			return {gameState: 2};
		default:
			return state;

	}
}