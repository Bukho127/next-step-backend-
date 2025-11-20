import asyncHandler from 'express-async-handler';
import Subjects from '../models/Subjects.js';

// @desc    Get all subjects
// @route   GET /api/subjects
// @access  Public
export const getAllSubjects = asyncHandler(async (req, res) => {
  const subjects = await Subjects.findAll();
  res.status(200).json(subjects);
});



// @desc    Create a new subject
// @route   POST /api/subjects
// @access  Public
export const createSubject = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);

  const { name, score, code } = req.body;
  if (!name || !score || !code) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  const subject = await Subjects.create({ name, score, code });
  res.status(201).json({ message: "Subject created", subject });

});

// @desc    Get single subject
// @route   GET /api/subjects/:id
export const getSubject = asyncHandler(async (req, res) => {
  const subject = await Subjects.findByPk(req.params.id);

  if (!subject) {
    res.status(404);
    throw new Error("Subject not found");
  }

  res.status(200).json(subject);
});

// @desc    Update a subject
// @route   PUT /api/subjects/:id
export const updateSubject = asyncHandler(async (req, res) => {
  const subject = await Subjects.findByPk(req.params.id);

  if (!subject) {
    res.status(404);
    throw new Error("Subject not found");
  }

  await subject.update(req.body);

  res.status(200).json({
    message: "Subject updated", subject
  });
});

// @desc    Delete a subject
// @route   DELETE /api/subjects/:id
export const deleteSubject = asyncHandler(async (req, res) => {
  const subject = await Subjects.findByPk(req.params.id);

  if (!subject) {
    res.status(404);
    throw new Error("Subject not found");
  }

  await subject.destroy();

  res.status(200).json({ message: "Subject deleted" });
});
