//const joi = require('joi');
/*const joi = require('joi')
const mongoose = require('mongoose')


const Authschema = new mongoose.Schema({
    firstname:joi.string()
        .min(5)
        .max(50)
        .required(),
    
    lastname: joi.string()
        .min(3)
        .max(50)
        .required(),

    phoneNumber:joi.number()
        .min(11)
        .required(),

    cnic: joi.number()
        .required(),

    address: joi.string()
        .required()

});
const User = mongoose.model('User', Authschema);
module.exports.User = User;
//.with('firstname', 'cnic')
//.with('lastname', 'address')
//.with('phoneNumber');
/*
schema.validate({ firstname: 'abc', lastname: 'abc', phoneNumber: 123, cnic:123, address:'abc' });
// -> { value: { username: 'abc', birth_year: 1994 } }

schema.validate({firstname, error:'"firstname" is required', lastname, error:'"lastname" is required', phoneNumber, error:'"phoneNumber" is required', cnic, error:'"cnic" is required',});
// -> { value: {}, error: '"username" is required' }
//const validation = schema.validate(req.body);
try {
    const value = await schema.validateAsync(req.body);
 }
 catch (err) {
    console.log(err)
  }

// Also -


 /*const schema = Joi.object().keys({ username: Joi.string().min(5).max(50),
     email: Joi.string().required().email().min(5).max(255),
      password: Joi.string().required().min(5).max(1024), });
  const validation = schema.validate(req.body);
   if(validation.error){ res.status(400).send(validation.error.details[0].message);
     return ;
     }*/