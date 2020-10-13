const express = require('express');
const router = express.Router();


const {
    customerRegistration,
 getAllCustomer,
 deleteCustomer,
 updateCustomer
} = require('./controller');

router.post('/', customerRegistration);
router.get('/getall',  getAllCustomer);
router.delete('/delete/:id', deleteCustomer);
router.put('/update/:id',  updateCustomer);


module.exports = router;