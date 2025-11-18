import express from 'express';
import {
    getAllSubjects,
    createSubject,
    getSubject,
    updateSubject,
    deleteSubject
} from '../controllers/subjectController.js';

const router = express.Router();

router.route('/')
    .get(getAllSubjects)
    .post(createSubject);
router.route('/:id')
    .get(getSubject)
    .put(updateSubject) 
    .delete(deleteSubject);

export default router;