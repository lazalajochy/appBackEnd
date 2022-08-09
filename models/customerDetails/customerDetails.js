import db from '../../conn/conn.js';
import { DataTypes } from 'sequelize';

const CustomerDetails = db.define('customerdetails', {
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
    {
        type: DataTypes.STRING
    },
    customerPhone: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.FLOAT
    },

    weeks: {
        type: DataTypes.FLOAT
    },
    totalPayment: {
        type: DataTypes.FLOAT
    },
    amountPaid: {
        type: DataTypes.FLOAT
    },
    amountNotPaid: {
        type: DataTypes.FLOAT
    },
    weeksPaid: {
        type: DataTypes.FLOAT
    },
    weeksNotPaid: {
        type: DataTypes.FLOAT
    },
    advance: {
        type: DataTypes.FLOAT
    },
    mora: {
        type: DataTypes.FLOAT
    },
    weeksDue: {
        type: DataTypes.FLOAT
    },
    details_id: {
        type: DataTypes.INTEGER
    },
    paymentWeek:{
        type: DataTypes.FLOAT
    }
})


export default CustomerDetails;