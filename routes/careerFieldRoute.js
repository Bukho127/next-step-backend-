
import express from 'express';
import {getAllCareerFields,} from '../controllers/careerFieldController.js'; 
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();
router.route('/')
  .get(getAllCareerFields);
  
export default router;
