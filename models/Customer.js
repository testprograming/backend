const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
name: {
    type: String,
    required: true,
},
phone: {
    type: String,
    required: true,
},
address: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
image_url: {
    type: String,
},

createAt: {
    type: Date,
    default: Date.now,
},
updateAt: {
    type: Date,
    default: Date.now,
},

});

const Customer = mongoose.model(`customer`, customerSchema);

module.exports = Customer;