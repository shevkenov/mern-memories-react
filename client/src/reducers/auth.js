import * as actionNames from '../constants/actionNames';

const initialState = { isLoggedIn: false, loading: false, authData: null, error: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case actionNames.LOGIN:
            localStorage.setItem('token', action.payload.token);
            return { ...state, isLoggedIn: true, authData: action.payload, loading: false}

        case actionNames.LOGOUT:
            localStorage.clear();
            return initialState;
    }

    return state
} 