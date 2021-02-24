import express from 'express';

import { getPost, getPosts, deletePost, likedPost, updatePost, createPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const postRouter = express.Router();

//postRouter.post('/:id', getPost);
postRouter.delete('/:id', auth, deletePost);
postRouter.patch('/:id', auth, updatePost);
postRouter.patch('/:id/like', auth, likedPost);
postRouter.post('/', auth, createPost);
postRouter.get('/', getPosts);

export default postRouter;
