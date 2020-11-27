import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import episodesReducer from './episodesReducer';

export const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer
})