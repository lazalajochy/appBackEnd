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
        type: DataTypes.STRING
    },
    amount:{
        type: DataTypes.FLOAT
    },
    customer_id:{
        type: DataTypes.INTEGER
    },
    weeks:{
        type: DataTypes.FLOAT
    },
    totalPayment: {
        type: DataTypes.FLOAT
    },
    amountPaid: {
        type: DataTypes.FLOAT
    },
    amountNotPaid:{
        type: DataTypes.FLOAT
    },
    weeksPaid:{
        type: DataTypes.FLOAT
    },
    weeksNotPaid:{
        type: DataTypes.FLOAT
    },
    advance: {
        type: DataTypes.FLOAT
    },
    mora:{
        type: DataTypes.FLOAT
    },
    weeksDue:{
        type: DataTypes.FLOAT
    },
    paymentWeek:{
        type: DataTypes.FLOAT
    },
    countWeek:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.STRING
    }
});

export default Customer;