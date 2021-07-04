const mongoose = require('mongoose');
const winston = require('winston');
const uri = 'mongodb+srv://sesu:sesughasa1@cluster0.tu2xz.mongodb.net/sweet'
module.exports=()=>{
    mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
    }).then(()=> winston.info('MongoDb connected succesfully...'));
}