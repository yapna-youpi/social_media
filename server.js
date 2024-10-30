//about server and principals components
const express = require("express");
require('dotenv').config({path: './config/.env'})
const app = express();

app.listen(process.env.PORT, ()=> {
    console.log(`server slistening on port ${process.env.PORT}`)
})