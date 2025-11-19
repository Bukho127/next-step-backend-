import asyncHandler from 'express-async-handler';
import Student from '../models/Student.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Public
export const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.findAll();
  res.status(200).json(students);
  
});
// @desc    Create a new student
// @route   POST /api/students
// @access  Public
export const createStudent = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);

  const { name, dateOfBirth, grade, email, password } = req.body;
  if (!name || !dateOfBirth || !grade || !email || !password) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  res.status(201).json({ message: 'Student created successfully!' });
});

export const getStudent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get student for ${req.params.id}` });
});

export const updateStudent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update student profile for  ${req.params.id}` });
});

export const deleteStudent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete student account for  ${req.params.id}` });
});
