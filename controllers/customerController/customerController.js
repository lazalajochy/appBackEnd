import Customer from '../../models/customerModel/customerModel.js';
import CustomerDetails from "../../models/customerDetails/customerDetails.js";
import { Op } from 'sequelize'

export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({

            where: {
                customer_id: req.params.manager_id,
                status: 'active'
            }

        });
        res.json(customers)
    } catch (error) {
        res.json(error);

    }
};

export const getReport = async (req, res) => {
    try {
        const report = await Customer.findAll({
            where: {
                status: 'active',
                customer_id: req.params.manager_id,
                updatedAt: {
                    [Op.and]: {
                        [Op.lt]: new Date(new Date + 24 * 60 * 60 * 1000),
                        [Op.gt]: new Date(new Date - 768 * 60 * 60 * 1000)
                    }
                }
            }
        })
        res.json(report)
    } catch (error) {
        console.log(error)

    }
}
//setInterval(getReport, 5000)

export const getInactiveCustomer = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            where: {
                customer_id: req.params.manager_id,
                status: 'inactive'
            }
        })
        res.json(customers)
    } catch (error) {
        res.json(error)

    }
}


export const getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findAll({
            where: {
                customer_id: req.params.manager_id,
                id: req.params.id
            }
        })
        res.json(customer)
    } catch (error) {

    }
}

export const saveCustomer = async (req, res) => {
    const { customerName, customerPersonalId, customerPhone, customer_id, amount, totalPayment, paymentWeek, amountPaid, amountNotPaid, weeksPaid, weeksNotPaid, advance } = req.body;
    try {
        await Customer.create({
            customerName: customerName,
            customerPersonalId: customerPersonalId,
            customerPhone: customerPhone,
            customer_id: customer_id,
            amount: amount,
            totalPayment: totalPayment,
            paymentWeek: paymentWeek,
            amountPaid: amountPaid,
            amountNotPaid: amountNotPaid,
            weeksPaid: weeksPaid,
            weeksNotPaid: weeksNotPaid,
            advance: advance

        });
        res.json("customer saved!!")
    } catch (error) {
        console.log(error);
    }
}


export const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy({
            where: { id: req.params.id }
        })

    } catch (error) {
        console.log(error)

    }
}


export const updateCustomer = async (req, res) => {
    try {
        await Customer.update(req.body, {
            where: {
                customer_id: req.params.manager_id,
                id: req.params.id
            }
        })
        res.json("actualizado")
    } catch (error) {
        res.json(error)

    }
}


const updateWeek = async () => {
    try {
        await Customer.increment({ countWeek: 1 },
            { where: { status: "active" } }
        )
    } catch (error) {
        console.log(error)
    }

    const customer = await Customer.findAll({ where: { status: 'active' } })

    for (var i = 0; i < customer.length; i++) {
        var result = customer[i].weeksPaid - customer[i].countWeek;

        if (result < 0) {
            await customer[i].update({
                weeksDue: result
            },
                {
                    where: { status: 'active' }

                }
            )
        } else {
            await customer[i].update({
                weeksDue: 0
            },
                {
                    where: { status: 'active' }
                })
        }

        await CustomerDetails.create({
            customerName: customer[i].customerName,
            customerPersonalId: customer[i].customerPersonalId,
            customerPhone: customer[i].customerPhone,
            amount: customer[i].amount,
            totalPayment: customer[i].totalPayment,
            paymentWeek: customer[i].paymentWeek,
            amountPaid: customer[i].amountPaid,
            amountNotPaid: customer[i].amountNotPaid,
            weeksPaid: customer[i].weeksPaid,
            weeksNotPaid: customer[i].weeksNotPaid,
            details_id: customer[i].id,
            advance: customer[i].advance,
            weeksDue: customer[i].weeksDue
        })
    }
}

var date = new Date()
var day = date.getDay()

if (day == 0) {
    setInterval(updateWeek, 23 * 60 * 60 * 1000)
};

