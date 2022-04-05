const express = require("express");
const app = express();
const userRouter = require("../api/routes/user.js");
const certRouter = require("../api/routes/cert.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbUrl ="mongodb+srv://sudh0499:Sudhanshu123@cluster0.4l1dr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const cors =require("cors")

app.use(cors())
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("Mongodb is successfully connected")
).catch(
    (err)=>console.log(err)
)

//configuring body parser(accepts key value from request and parses)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//configuring morgan(logger)
app.use(morgan("dev"));

app.get("/",(req,res,next)=>{
    res.json({message:"This works, thankyou"})
    next();
});
app.use("/users",userRouter);
app.use("/certs",certRouter);

module.exports = app;
