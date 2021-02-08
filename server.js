const express = require("express");
const mongoose = require("mongoose");
//const path = require("path");
//const config = require("config");

const app = express();


//DB config

mongoose.connect("mongodb+srv://harshvardhan:harshvardhan@cluster0.tukxk.mongodb.net/svadhyaya?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((error)=>{
    console.log(error);
});

//use router
//app.use("/api/user", require("./routes/api/user"));
app.use("/api/dailyque", require("./routes/api/dailyque"));
//app.use("/api/status", require("./routes/api/status"));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));