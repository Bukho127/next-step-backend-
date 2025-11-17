const express = require('express');
const router = express.Router();
const {getStudent} = require('../controllers/studentController');
const {getAllStudents} = require('../controllers/studentController');
const {createStudent} = require('../controllers/studentController');
const {updateStudent} = require('../controllers/studentController');
const {deleteStudent} = require('../controllers/studentController');

router.route('/')
.get(getAllStudents)
.post(createStudent);

router.route('/:id')
.get(getStudent)
.put(updateStudent)
.delete(deleteStudent);

module.exports = router;