const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

const app = express();

//Load env vars
dotenv.config({path: './config/config.env'});

//connect to database
connectDB();

// Body parser
app.use(express.json());

//Route files
const auth = require('./routes/auth');
const user = require('./routes/user');

//Load env vars
dotenv.config({path: './config/config.env'});


//Mount Routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);


//ErrorHandler to use in whole app
app.use(errorHandler);

//Port
port = process.env.PORT || 3000 ;

const server = app.listen(
  port,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
);