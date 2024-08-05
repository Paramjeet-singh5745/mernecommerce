const express=require("express");
const cookie=require('cookie-parser')
const cors=require("cors");
require('dotenv').config();
const ConnectDB=require("./config/db")
const router=require('./routes/route');
const cookieParser = require("cookie-parser");
const app=express();
app.use(cors({
    origin:process.env.FRONTED_URL,
    credentials:true,
}));
app.use(express.json())
app.use(cookieParser())
app.use("/api",router)
const port=8080 || process.env.PORT;
ConnectDB().then(()=>{
        app.listen(port, () => {
            console.log(`App listening on port ${port}!`);
        });
})

