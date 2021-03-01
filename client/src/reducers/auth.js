import * as actionNames from '../constants/actionNames';

const initialState = { isLoggedIn: false, loading: false, authData: null, error: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case actionNames.LOGIN_START:
            return {...state, loading: true}

        case actionNames.LOGIN_ERROR:
            return {...state, loading: false, error: action.payload}

        case actionNames.LOGIN:
            localStorage.setItem('token', action.payload.token);
            return { ...state, isLoggedIn: true, authData: action.payload, loading: false, error: null}

        case actionNames.LOGOUT:
            localStorage.clear();
            return initialState;
    }

    return state
} 