import db from "../../conn/conn.js";
import { DataTypes } from "sequelize";

const Manager = db.define('managers', {
    id:
    {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    managerName:
    {
        type: DataTypes.STRING
    },
    managerEmail:
    {
        type: DataTypes.STRING
    },
    managerPassword:
    {
        type: DataTypes.STRING
    },
    companyName :{
        type: DataTypes.STRING
    }
})

export default Manager;


