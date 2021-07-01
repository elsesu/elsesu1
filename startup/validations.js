const joi = require('joi')

module.exports = () => {
    joi.objectId = require('joi-objectid')(joi);
}