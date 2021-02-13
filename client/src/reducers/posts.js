import * as actionName from '../constants/actionNames';

const initialState = {
    allPosts: [],
    id: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionName.CREATE_POST:
            return {
                ...state,
                allPosts: [...state.allPosts, action.payload]
            }

        case actionName.GET_ALL_POSTS:
            return {...state, allPosts: [...action.payload]};

        case actionName.GET_POST:
            return state;

        case actionName.REMOVE_POST:
            return {
                ...state, allPosts: state.allPosts.filter(p => p._id !== action.payload)
            };
        
        case actionName.UPDATE_POST:
            return {
                allPosts: state.allPosts.map(p => p._id === action.payload._id ? action.payload : p) , id: null
            };

        case actionName.LIKED_POST:
            return {
                ...state, allPosts: state.allPosts.map(p => (p._id === action.payload._id ? action.payload : p))
            };
        
        case actionName.SET_POST_ID:
            return{
                ...state, id: action.payload
            }
        
        case actionName.CLEAR_POST_ID:
            return{
                ...state, id: null
            }

        default:
            return state;
    }
}