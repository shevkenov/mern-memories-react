import express from 'express';

import { getPost, getPosts, deletePost, likedPost, updatePost, createPost } from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.post('/:id', getPost);
postRouter.delete('/:id', deletePost);
postRouter.patch('/:id', updatePost);
postRouter.patch('/:id/like', likedPost);
postRouter.post('/', createPost);
postRouter.get('/', getPosts);

export default postRouter;
