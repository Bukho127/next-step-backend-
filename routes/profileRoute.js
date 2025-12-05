import express from 'express';
import upload from '../middleware/Profile-upload.js';
import { uploadProfile } from '../controllers/profileController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post('/',validateToken, upload.single('profilePic'), uploadProfile);

export default router;
