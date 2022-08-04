import db from '../../conn/conn.js';
import { DataTypes } from 'sequelize';

const CustomerDetails = db.define('customerdetails', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    amount:{
        type: DataTypes.FLOAT
    },
    weeks:{
        type: DataTypes.INTEGER
    },
    totalPayment:{
        type: DataTypes.FLOAT
    },
    paymentWeek:{
        type: DataTypes.FLOAT
    },
    amountPaid:{
        type: DataTypes.FLOAT
    },
    amountNotPaid:{
        type: DataTypes.FLOAT
    },
    weeksPaid:{
        type:DataTypes.FLOAT
    },
    weeksNotPaid:{
        type: DataTypes.FLOAT
    },
    advance:{
        type: DataTypes.FLOAT
    },
    weeksDue:{
        type: DataTypes.FLOAT
    },
    countWeeks:{
        type: DataTypes.FLOAT
    },
    mora:{
        type: DataTypes.FLOAT

    },
    details_id:{
        type: DataTypes.INTEGER
    },
    manager_id:{
        type: DataTypes.INTEGER
    }

})


export default CustomerDetails;