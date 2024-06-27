import express from 'express';
import { getLikes, getUserProfileRepos, likeProfile } from '../controllers/user.controller.js';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';

const router=express.Router();

router.get("/profile/:username",getUserProfileRepos)
router.get("/like/:username",ensureAuthenticated,likeProfile)
router.get("/like",ensureAuthenticated,getLikes)

export default router;