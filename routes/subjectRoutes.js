import express from 'express';
import {
    getAllSubjects,
    createSubject,
    getSubject,
    updateSubject,
    deleteSubject
} from '../controllers/subjectController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.route('/')
    .get(getAllSubjects)
    .post(createSubject);
    
router.use(validateToken)
router.route('/:id')
    .get(getSubject)
    .put(updateSubject) 
    .delete(deleteSubject);

export default router;