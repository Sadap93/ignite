
const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: []
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state }
        default:
            return { ...state }
    }
};


//ACTION CREATOR
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        payload: userData
    };
};


export default gameReducer;