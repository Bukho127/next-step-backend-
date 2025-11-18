import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Subjects = sequelize.define("Subjects", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  score:{ type: DataTypes.FLOAT, allowNull: false },
  code: { type: DataTypes.INTEGER, allowNull: false, unique: true },
},{
    timestamps: true,
});
export default Subjects;