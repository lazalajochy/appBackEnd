import db from "../../conn/conn.js";
import { DataTypes } from "sequelize";

const Customer = db.define('customers', {
    id:
    {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerName:
    {
        type: DataTypes.STRING
    },
    customerPersonalId:
        { type: DataTypes.STRING 
    },
    customerPhone:{
        type: DataTypes.FLOAT
    }
});

export default Customer;