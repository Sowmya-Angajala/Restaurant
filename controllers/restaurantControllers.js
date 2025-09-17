const Restaurant =require("../models/restaurantModel")

exports.createRestaurant =async (req,res)=>{
    try {
        console.log("req",req)
        const restaurant =await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

exports.getRestaurants =async (req,res)=>{
    try {
        const filter =req.query.cuisine ?{cuisine :req.query.cuisine} : {};
        const restaurants =await Restaurant.find(filter);
        res.json (restaurants);
    } catch (error) {
        res.status(404).json({message:"Restaurants not found"})
    }
};

exports.getRestaurant =async (req,res)=>{
    try {
        const restaurant =await Restaurant.findById(req.params.restaurantId);
        if(!restaurant) return 
        res.status(404).json({message:"Restaurant not found"});
        res.json(restaurant)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

exports.updateRestaurant =async(req,res)=>{
    try {
        const restaurant =await Restaurant.findByIdAndUpdate(req.params.restaurantId.req.body,{new :true});
        res.json(restaurant);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

};
