
import express from 'express';
import {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js'; 
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.route('/')
  .get(getAllStudents)
  .post(createStudent);
  
router.use(validateToken)
router.route('/:id')
  .get(getStudent)
  .put(updateStudent)
  .delete(deleteStudent);

export default router;
