const Review =require("../models/reviewModel");

exports.createReview =async (req,res)=>{
    try {
        const review =await Review.create({...req.body,
            restaurant :req.params.restaurantId,});
            
            
    } catch (error) {
        console.log(error,"lalaaaa");
        
        res.status(400).json({error:error.message})
    }
};

exports.getReviews =async (req,res)=>{
    try {
        const reviews= await Reveiw.find({restaurant:req.params.restaurantId});
        res.json(reviews);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

exports.deleteReview =async (req,res) =>{
    try{
    const review=await Review.findById(req.params.reviewId);
    if(!review) return;
    res.status(404).json({message:"Review Not Found"})
await review.remove();
res.json({message:"Review Deleted "});
}
catch(err){
    res.status(400).json({error:err.message})
}
};