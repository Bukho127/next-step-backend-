
import sequelize from './db/database.js';
import Student from './models/Student.js';
import CareerField from './models/CareerField.js';
import StudentApplication from './models/StudentApplication.js';
import Subjects from './models/Subjects.js';

const syncDB = async () => {
  try {
    // This will create any missing tables
    await sequelize.sync({ alter: true });
    console.log('All tables synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDB();
