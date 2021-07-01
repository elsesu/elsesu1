const joi = require('joi');

const Authschema = joi.object({
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

})
//.with('firstname', 'cnic')
//.with('lastname', 'address')
//.with('phoneNumber');

module.exports = {
	Authschema
}

const validation = (user) => { Authschema.validate({ firstname: 'abc', lastname: 'abc', phoneNumber: 123, cnic:123, address:'abc' });
// -> { value: { username: 'abc', birth_year: 1994 } }
//Authschema.validate({firstname, error:'"firstname" is required', lastname, error:'"lastname" is required', phoneNumber, error:'"phoneNumber" is required', cnic, error:'"cnic" is required',});
return Authschema.validate(user)
}
module.exports.validation = validation;
// -> { value: {}, error: '"username" is required' }
//const validation = schema.validate(req.body);
//try {
 //   const value = await schema.validateAsync(req.body);
// }
// catch (err) {
 //   console.log(err)
 //}

//const validation = (customer) => {
//	const schema = {
//schema:validate({ firstname: 'abc', lastname: 'abc', phoneNumber: 123, cnic:123, address:'abc' }),
// -> { value: { username: 'abc', birth_year: 1994 } }
//tschema:validate({firstname, error:'"firstname" is required', lastname, error:'"lastname" is required', phoneNumber, error:'"phoneNumber" is required', cnic, error:'"cnic" is required',})
// -> { value: {}, error: '"username" is required' }
	//}
//return schema.validate(customer)
//}
//module.exports.validate = validation;
//validation = Authschema.validate(req.body);


/*try {
    const value = await Authschema.validateAsync(req.body);
    console.log(value);
 }
 catch (err) {
    console.log(err)
  }
/*

schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }

schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

try {
    const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
}
catch (err) { }

const Joi = require('joi')

//User-defined function to validate the user
function validateUser(user)
{
	const JoiSchema = Joi.object({
	
		username: Joi.string()
				.min(5)
				.max(30)
				.required(),
					
		email: Joi.string()
			.email()
			.min(5)
			.max(50)
			.optional(),
				
		date_of_birth: Joi.date()
					.optional(),
						
		account_status: Joi.string()
						.valid('activated')
						.valid('unactivated')
						.optional(),
	}).options({ abortEarly: false });

	return JoiSchema.validate(user)
}

const user = {
	username: 'Pritish',
	email: 'pritish@gmail.com',
	date_of_birth: '2020-8-11',
	account_status: 'activated'
}

response = validateUser(user)

if(response.error)
{
	console.log(response.error.details)
}
else
{
	console.log("Validated Data")
}
*/