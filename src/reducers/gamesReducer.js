
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.new,
            };
        default:
            return { ...state };
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