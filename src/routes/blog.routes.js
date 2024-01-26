import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost
} from '../controllers/blog.controller.js'

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;