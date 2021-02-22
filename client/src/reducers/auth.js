import * as actionNames from '../constants/actionNames';

const initialState = { isLoggedIn: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case actionNames.LOGIN:
            return { ...state, isLoggedIn: true }

        case actionNames.LOGOUT:
            return {...state, isLoggedIn: false}
    }

    return state
} 