import * as api from '../api/';
import * as actionNames from '../constants/actionNames';

export const getAllPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        return dispatch({type: actionNames.GET_ALL_POSTS, payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: actionNames.CREATE_POST, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const removePost = (id) => async(dispatch) => {
    try {
        await api.removePost(id);
        dispatch({type: actionNames.REMOVE_POST, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likedPost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likedPost(id);
        dispatch({type: actionNames.LIKED_POST, payload: data});
    } catch (error) {
        
    }
}

export const editPost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: actionNames.UPDATE_POST, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const setPostId = (id) => (dispatch) => {
    dispatch({type: actionNames.SET_POST_ID, payload: id})
}

export const clearPostId = () => (dispatch) => {
    dispatch({type: actionNames.CLEAR_POST_ID})
}

export const login = (form, {push}) => async(dispatch) => {
    try {
        dispatch({type: actionNames.LOGIN_START})
        
        const {data} = await api.login(form);
        
        dispatch({type: actionNames.LOGIN, payload: data})
        push('/');
    } catch (error) {
        console.log(error);
        dispatch({type: actionNames.LOGIN_ERROR, payload: 'Incorrect username or password!'})
    }
}

export const signUp = (form, {push}) => async(dispatch) => {
    try {
        const {data} = api.signUp(form);
        dispatch({type: actionNames.LOGIN, data})
        push('/')
    } catch (error) {
        console.log(error);
        dispatch({type: actionNames.LOGIN_ERROR, payload: 'Username already exists!'})
    }
}