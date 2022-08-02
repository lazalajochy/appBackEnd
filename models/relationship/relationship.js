import Customer from "../customerModel/customerModel.js";
import CustomerDetails from "../customerDetails/customerModelDetails.js";


CustomerDetails.belongsTo(Customer, {foreignKey: "idCustomer"});
Customer.hasMany(CustomerDetails, {foreignKey:"id"})

module.exports = {
    Customer,
    CustomerDetails
}