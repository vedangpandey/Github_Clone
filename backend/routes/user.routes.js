import express from 'express';
import { getUserProfileRepos } from '../controllers/user.controller.js';

const router=express.Router();

router.get("/profile/:username",getUserProfileRepos)

export default router;