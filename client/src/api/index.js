import axios from 'axios';

const url = 'https://mern-mems.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (data) => axios.post(url, data);
export const removePost = (id) => axios.delete(`${url}/${id}`);
export const likedPost = (id) => axios.patch(`${url}/${id}/like`);
export const updatePost = (id, data) => axios.patch(`${url}/${id}`, data);