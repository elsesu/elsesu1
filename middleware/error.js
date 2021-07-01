const string = require('joi/lib/types/string');
const winston = require('winston');

module.exports = (err, req, res) => {
    winston.error(err.message, err);
    res.status(500).send('something went wrong');
}
