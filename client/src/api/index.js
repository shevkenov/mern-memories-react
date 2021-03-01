import axios from 'axios';

//const url = 'https://mern-mems.herokuapp.com/posts';
const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use(req => {
    if(localStorage.getItem('token')){
        req.headers.Autorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
    }

    return req;
})

export const fetchPosts = () => API.get(`posts`);
export const createPost = (data) => API.post(`/posts`, data);
export const removePost = (id) => API.delete(`/posts/${id}`);
export const likedPost = (id) => API.patch(`/posts/${id}/like`);
export const updatePost = (id, data) => API.patch(`/posts/${id}`, data);
export const login = (data) => API.post(`/user/login`, data);
export const signUp = (data) => API.post(`/user/signup`, data);