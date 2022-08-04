import Customer from "./customerModel/customerModel.js";
import Manager from "./managerModel/managerModel.js";
import CustomerDetails from './customerDetails/customerDetails.js'

//un administrador tiene muchos clientes
Manager.hasMany(Customer, {foreignKey:"customer_id", as:"customers_details", onDelete:"CASCADE", onUpdate:"CASCADE"});
Customer.belongsTo(Manager, {foreignKey:"customer_id", as: "customer_details"});

//un cliente tiene muchos detalles
Customer.hasMany(CustomerDetails, {foreignKey:"details_id", as:"details", onDelete:"CASCADE", onUpdate:"CASCADE"});
CustomerDetails.belongsTo(Customer, {foreignKey:"details_id", as:"details"});
