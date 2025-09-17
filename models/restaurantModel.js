const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  cuisine:{type :String,required:true,enum:["italian","mexican","indian","chinese","other"]},
  address:{type:String,required:true,},
//   average:{type:String},
});

const Restaurant =mongoose.model("Restaurant",restaurantSchema);
module.exports =Restaurant;