import express from 'express';
import { deleteCustomer, getCustomers, saveCustomer, getCustomer } from '../controllers/customerController/customerController.js';
import { getManager, getManagers, login, register } from '../controllers/managerController/managerController.js';
const router = express.Router();

router.get('/', getManagers);
router.post('/', register);
router.post('/login', login);
router.get('/customer/:manager_id', getCustomers);
router.get('/customer/:manager_id/:id', getCustomer)
router.post('/customer', saveCustomer);
router.delete('/customer/:id', deleteCustomer);
router.get('/:id',getManager)
//router.get('/customerDetails/:id', customerDetails);
//router.post('/customerDetails', saveCustomerDetails);

export default router;

//https://react-bootstrap.github.io/components/modal/