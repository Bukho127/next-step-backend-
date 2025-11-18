import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const StudentApplication = sequelize.define("StudentApplication", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  studentId: { type: DataTypes.INTEGER, allowNull: false },
  careerFieldId: { type: DataTypes.INTEGER, allowNull: false },
  applicationDate: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Pending' },
},{
    timestamps: true,
});
export default StudentApplication;