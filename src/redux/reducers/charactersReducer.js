import { charactersConstants } from "../constants/constants";

const initialState = {
    currentCharacters: [],
    totalPagesOfCharacters: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case charactersConstants.GET_FIRST_CHARACTERS:
            return state = {
                ...state,
                currentCharacters: action.payload.currentCharacters,
                totalPagesOfCharacters: action.payload.totalPagesOfCharacters
            };
        case charactersConstants.GET_CHARACTERS:
            return state = {
                ...state,
                currentCharacters: action.payload.currentCharacters,
            };
        default: 
            return state;
    };
};