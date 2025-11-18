import express from 'express';
import dotenv from 'dotenv';
import studentsRoutes from './routes/studentsRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import errorHandler from './middleware/errorhandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/students', studentsRoutes);
app.use('/api/subjects', subjectRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
