import express from 'express';
import { registerUser, getUserProfile, loginUser } from '../controllers/userController.js';
import { Protect } from '../middleware/authMiddleware.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, getUserProfile);

export default router;
