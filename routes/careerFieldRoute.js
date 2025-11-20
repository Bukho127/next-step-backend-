
import express from 'express';
import {
  getAllCareerFields,

} from '../controllers/careerFieldController.js'; 

const router = express.Router();

router.route('/')
  .get(getAllCareerFields);
  
export default router;
