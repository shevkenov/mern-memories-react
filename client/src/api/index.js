import axios from 'axios';

//const url = 'https://mern-mems.herokuapp.com/posts';
const url = 'http://localhost:5000'

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (data) => axios.post(`${url}/posts`, data);
export const removePost = (id) => axios.delete(`${url}/posts/${id}`);
export const likedPost = (id) => axios.patch(`${url}/posts/${id}/like`);
export const updatePost = (id, data) => axios.patch(`${url}/posts/${id}`, data);
export const login = (data) => axios.post(`${url}/user/login`, data);
export const signUp = (data) => axios.post(`${url}/user/signup`, data);