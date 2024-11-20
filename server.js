//about server and principals components
const express = require("express");
const userRoutes = require("./routes/user.routes");
require('dotenv').config({path: './config/.env'});
require('./config/bd');
const app = express();


//midellware express to parse all data 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//routes
app.use('/api/user/', userRoutes)

//server
app.listen(process.env.PORT, ()=> {
    console.log(`server slistening on port ${process.env.PORT}`)
})