import express from 'express';
import upload from '../middleware/Profile-upload.js';
import { uploadProfile } from '../controllers/profileController.js';

const router = express.Router();

router.post('/', upload.single('profilePic'), uploadProfile);

export default router;
