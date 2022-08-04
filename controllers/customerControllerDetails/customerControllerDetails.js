import CustomerDetails from "../../models/customerDetails/customerDetails.js";

export const getDetails = async(req, res) => {
    try {
        const details = await CustomerDetails.findAll({
            where:{
                details_id: req.params.id
            }
        })
        res.json(details)
    } catch (error) {
        console.log(error)
    }
}


export const managerDetails = async (req, res) => {
    try {
        const managerdetails = await CustomerDetails.findAll({
            where:{
                manager_id: req.params.manager_id
            }
        })
        res.json(managerdetails)
    } catch (error) {
        console.log(error)
        
    }
}

export const saveCustomerDetails = async (req, res) => {
    const {amount, totalPayment, paymentWeek, amountPaid, amountNotPaid, weeksPaid, weeksNotPaid, advance, details_id, manager_id} = req.body
    try {
        await CustomerDetails.create({
            amount: amount,
            totalPayment:totalPayment,
            paymentWeek:paymentWeek,
            amountPaid:amountPaid,
            amountNotPaid:amountNotPaid,
            weeksPaid:weeksPaid,
            weeksNotPaid:weeksNotPaid,
            advance:advance,
            details_id:details_id,
            manager_id: manager_id
        });
        res.json('details save')
    } catch (error) {
        console.log(error)
        
    }
}