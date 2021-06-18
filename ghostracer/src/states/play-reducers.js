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


/* Game state */
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

/* Play State */
const initPlayState = {
    opponentID: 'lawrence',
    stakeSize: 3,
    time: 100,
    speed: 100,
    accuracy: 1,
    opponentTime: 98,
    opponentSpeed: 300,
    opponentAccuracy: 2,
    gameResult: false,
    gainedCoin: -10,
    gainedRank: -15,
}

function max(a, b) { return a > b ? a : b; }

export function play(state = initPlayState, action) {
    switch (action.type) {
        case '@PLAY/ADD_STAKE':
            return {
                ...state,
                stakeSize: state.stakeSize + 1
            }
        case '@PLAY/LESS_STAKE':
            return {
                ...state,
                stakeSize: max(state.stakeSize - 1, 0)
            }
        case '@PLAY/SET_RESULT':
            return {
                ...state,
                ...action
            }
        case '@PLAY/SET_OPPONENT':
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
}