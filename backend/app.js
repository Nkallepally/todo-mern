const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const userInfo = require("./modals/user-modal")
const todoInfo = require("./modals/todo-modal")
const cors = require("cors");

const userController = require("./routes/user")
mongoose.connect("mongodb+srv://Navyaa:Navya29@cluster0.vv8toxm.mongodb.net/?retryWrites=true&w=majority",()=>{   
    console.log("Successfully connected to db")
},(err)=>{
    console.log(err)
})



app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.listen(process.env.PORT || 3005, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server started at port 3005")
    }

})

app.get("/", (req, res) => {
    res.send("web placement Assignment project backend")
})


//middleware
app.use("/user", userController)