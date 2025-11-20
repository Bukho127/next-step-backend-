import asyncHandler from 'express-async-handler';
import  CareerField from '../models/CareerField.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Public
export const getAllCareerFields = asyncHandler(async (req, res) => {
  const career = await CareerField.findAll();
  res.status(200).json(career);
  
});
