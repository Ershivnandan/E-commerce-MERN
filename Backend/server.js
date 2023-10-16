const app = require('./app');

const dotenv = require('dotenv');

const connectDatabase = require('./config/db');
require('colors')
//config

dotenv.config({path:"backend/config/config.env"});

//connecting to database

connectDatabase()

app.listen(process.env.PORT,() => {
    console.log(`app works! on https://localhost:${process.env.PORT}`.bgBlack);
})