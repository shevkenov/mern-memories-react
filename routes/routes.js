import express from 'express';

import { getPost, getPosts, deletePost, likedPost, updatePost, createPost, allRouts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id', getPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.patch('/:id/like', likedPost);
router.get('*', allRouts);

export default router;
