const mongoose=require("mongoose");
const Restaurant=require("./restaurantModel");

const reviewSchema =new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minlength :10,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant",
        required:true,
    },
})

//static method 
reviewSchema.statics.calcAverageRatings=async function(restuarantId){
    const stats =await this.aggregate([{
        $match :{restaurant:restuarantId}
    },
    {
        $group :{
            _id:"$restaurant",
            avgRating:{$avg :'$rating'}
        }
    }
]);
    await Restaurant,findByIdAndUpdate(restuarantId,{averageRating:stats.length>0 ? stats[0].avgRating :0,
        
    });
};

reviewSchema.post("save",function(){
    this.constructor.calcAverageRatings(this.restaurant);

});
reviewSchema.post("remove",function(){
    this.constructor.calcAverageRatings(this.restaurant);
});

const Review =mongoose.model("Review",reviewSchema);
module.exports=Review;