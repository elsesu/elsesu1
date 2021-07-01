const {validation} = require('../startup/validation_Schema');
const joi = require('@hapi/joi')
const {User} = require('../models/customer')

const getAllCustomers = async (req, res, next) => {
    const list = await User.find().exec();
    res.render('customerlist',{
        customers: list
    });
}

const getAddCustomerView = (req, res, next) => {
    res.render('addCustomer');
}
const addCustomer = async(req, res, next) => {
    const {error} = validation(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    const data = req.body
    let customer = await new User({
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber:data.phoneNumber,
        cnic:data.cnic,
        address:data.address,
    });
      customer = await customer.save();
      res.redirect('/');
}
 const getUpdateCustomerView = async (req, res, next) => {
     try {
const id = req.params.id;
const onecustomer = await User.findById(id).exec();
res.render("updateCustomer", {
    customer:onecustomer
});
     }
     catch(error){
         res.status(400).send(error.message);
     }
 }
     const updateCustomer = async(req, res, next) => {
         const {error} = validation(req.body);
         if(error) return res.status(422).send(error.details[0].message);
const id = req.params.id;
const data = req.body;
         let customer = await User.findByIdAndUpdate(id, {
              firstname: data.firstname,
              lastname:data.lastname,
              phoneNumber:data.phoneNumber,
              address:data.address,
              cnic:data.cnic
         }, {new:true});

         if(!customer) return res.status(404).send('Customer Not Found');
  res.redirect('/')
        }
        const getDeleteCustomerView = async(req, res, next) => {
try{
    const id = req.params.id;
    const onecustomer = await User.findById(id).exec();
    res.render('deleteCustomer',{
        customer:onecustomer
    });
} catch (error){
    res.status(400).send(error.message);
}
        }
        const deleteCustomer = async(req,res,next)=>{
            try{
                const id = req.params.id;
                const customer = await  User.findByIdAndRemove(id);
                if(!customer) return res.status(404).send('Customer not Found');
                res.redirect('/');
                }
                catch(error){
                    res.status(400).send(error.message);
                }
                 
            }
        
        
module.exports = {
    getAllCustomers, 
    getAddCustomerView,
    addCustomer,
    getUpdateCustomerView,
    updateCustomer,
    getDeleteCustomerView,
    deleteCustomer
}

