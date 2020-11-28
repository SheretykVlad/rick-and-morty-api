import { locationsConstants } from '../constants/constants';

const initialState = {
    locations: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case locationsConstants.GET_ALL_LOCATIONS:
            return state = {
                ...state,
                locations: action.payload.locations
            };
        default: 
            return state
    };
};