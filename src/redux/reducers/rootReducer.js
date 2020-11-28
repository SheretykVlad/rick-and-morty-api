import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import episodesReducer from './episodesReducer';
import locationsReducer from './locationsReducer';

export const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
})