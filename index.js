const express = require('express')
const path = require('path')
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const error = require('./middleware/error');
const winston = require('winston')
const customerRoutes = require('./routes/customer-routes');
//const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app = express()
require('./startup/config');
//require('./startup/db');
//require('./startup/logging')();
require('./startup/validations');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(customerRoutes.routes);
  app.use(expressLayoutes);
  app.use(customerRoutes.routes);
  
app.use(expressLayoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
//app.use(express.urlencoded({extended:true}));
app.listen(process.env.PORT || "5000", () => {
  console.log(`"Running on ${process.env.PORT || "5000"}!`)
})
 // app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
