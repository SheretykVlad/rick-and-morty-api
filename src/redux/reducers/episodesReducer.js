import { episodesConstants } from '../constants/constants';

const initialState = {
    episodes: [],
    episodesForTable: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case episodesConstants.GET_ALL_EPISODES:
            return state = {
                ...state,
                episodes: action.payload.episodes,
                episodesForTable: action.payload.episodesForTable
            };
        default:
            return state
    };
};