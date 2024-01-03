require('dotenv').config();
const express = require('express');

const app = express();


app.listen(process.env.PORT, () =>{
    console.log(`This server is listening on port of ${process.env.PORT}`);
})