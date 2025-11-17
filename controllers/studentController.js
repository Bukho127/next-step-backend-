const asyncHandler = require('express-async-handler');
//@describe get all students
//@describe create a new student account
//@describe get student by id
//@describe update student profile by id
//@describe delete student account by id
//@ route /api/students
//@ access is public


const getAllStudents = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get all students!' })
});

const createStudent =  asyncHandler(async (req, res) => {
  console.log("the request body is :" , req.body);
  const { name, dateOfBirth, grade, email } = req.body;
  if(!name || !dateOfBirth || !grade || !email){
  res.status(400);
  throw new Error('all fields are mandatory');
  }
});
const getStudent =  asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get student for ${req.params.id}` })
});

const updateStudent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update student student profile for ${req.params.id}` })
});

const deleteStudent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete student account forS ${req.params.id}` });
});

module.exports = {
  getStudent,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
};