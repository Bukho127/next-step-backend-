import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js';

const Student = sequelize.define('Student', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }, 
  dateOfBirth: { type: DataTypes.DATEONLY, allowNull: false },
  grade: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

export default Student;

