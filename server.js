const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorhandler').errorHandler;
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/students', require('./routes/studentsRoutes'));
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
