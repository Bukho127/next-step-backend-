import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const CareerField = sequelize.define("CareerField", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  gradeRequirement: { type: DataTypes.STRING, allowNull: true },
  apScores: { type: DataTypes.STRING, allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
});
export default CareerField;