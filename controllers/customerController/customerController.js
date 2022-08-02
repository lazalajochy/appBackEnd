import Customer from '../../models/customerModel/customerModel.js';


export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            
            where:{customer_id: req.params.manager_id}
        
        });
        res.json(customers)
    } catch (error) {
        console.log(error);
        
    }
};

export const getCustomer = async(req, res) => {
    try {
        const customer = await Customer.findAll({
            where:{
                customer_id: req.params.manager_id,
                id: req.params.id
            } 
        })
        res.json(customer)
    } catch (error) {
        
    }
}

export const saveCustomer = async (req, res) => {
    const {customerName, customerPersonalId, customerPhone, customer_id} = req.body;
    try {
        await Customer.create({
            customerName: customerName,
            customerPersonalId: customerPersonalId,
            customerPhone: customerPhone,
            customer_id: customer_id
        });
        res.json("customer saved!!")
    } catch (error) {
        console.log(error);
        
    }
}


export  const deleteCustomer = async (req, res) =>{
    try {
        await Customer.destroy({
           where:{id: req.params.id} 
        })

    } catch (error) {
        console.log(error)
        
    }
}