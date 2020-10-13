const { Customer } = require('../../models');

module.exports = {
    customerRegistration: async (req, res) => {
        const { name, phone, address, email, image_url } = req.body;

        try {
            const checkedCustomer = await Customer.findOne({ phone });

            if (checkedCustomer) {
                return res.send({
                    message: `Phone Number is already registered`,
                });
            }

            await Customer.create({
                name,
                phone,
                address,
                email,
                image_url,
            });

            res.send({
                message: `Registration success`,
            });
        } catch (error) {
            console.error(error);
        }
    },
    
    getAllCustomer : async (req, res) => {
        try{
            const result = await Customer.find().select('-password');
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    deleteCustomer: async (req, res) => {
        const {id} = req.params;
        try{
            await Customer.findByIdAndDelete(id);

            res.send({message: 'user deleted'});
        } catch (error) {
            res.send(error);
        }
    },
    updateCustomer: async (req, res) => {
        const id = req.params.id;
        
        try {
            const result = await Customer.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'Update profil customer succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },

};