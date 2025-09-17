require('dotenv').config();
const mongoose=require('mongoose');

const app=require("./app");

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB connected"))
.catch((err)=>console.log(err))

const port =process.env.PORT || 5000;
console.log(port);

app.listen(port,()=>console.log("Server Running on  port ${port}"))
