import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";
import CareerField from "./CareerField.js";
import Subject from "./Subjects.js";

const CareerSubjectRequirement = sequelize.define("CareerSubjectRequirement", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  minimumScore: { type: DataTypes.FLOAT, allowNull: false },
  isMandatory: { type: DataTypes.BOOLEAN, defaultValue: true },
});

// Associations
CareerField.hasMany(CareerSubjectRequirement, { foreignKey: "careerFieldId" });
CareerSubjectRequirement.belongsTo(CareerField, { foreignKey: "careerFieldId" });

Subject.hasMany(CareerSubjectRequirement, { foreignKey: "subjectId" });
CareerSubjectRequirement.belongsTo(Subject, { foreignKey: "subjectId" });



export default CareerSubjectRequirement;
