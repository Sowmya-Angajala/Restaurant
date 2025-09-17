const express=require("express");
const morgan =require("morgan");

const restaurantRoutes =require("./routes/restaurantRoutes")
const reviewRoutes=require("./routes/reviewRoutes")

const app=express();

app.use(express.json());
if(process.env.NODE_ENV ==="development"){
    app.use(morgan('dev'))
}
app.use("/api/restaurants",restaurantRoutes);
app.use("/api/reviews",reviewRoutes);


app.use((req,res,next)=>{
    res.status(404).json({message:"Not Found"});
})

module.exports=app;