const express = require('express');
//route import
const productRouter = require('./routes/productroute');


const app = express();

app.use(express.json());


app.use("/api/v1", productRouter);

module.exports = app