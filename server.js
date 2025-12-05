import express from 'express';
import dotenv from 'dotenv';
import studentsRoutes from './routes/studentsRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import careerFieldRoutes from './routes/careerFieldRoute.js';
import profileRoutes from './routes/profileRoute.js'; 
import errorHandler from './middleware/errorhandler.js';
import userRoutes from './routes/usersRoutes.js'
import path from 'path';
import multer from 'multer';
import  cors from 'cors';




dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API routes
app.use('/api/students', studentsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/career-fields', careerFieldRoutes);
app.use('/api/profile', profileRoutes); 

console.log('Routes for /api/students, /api/subjects,/api/profile and api/user/register and api/user/login have been set up.');

// Multer error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

// Error handling middleware
app.use(errorHandler);
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
