const  express =require("express");
const router =express.Router();
const restaurantController =require("../controllers/restaurantControllers")
const reviewController =require("../controllers/reviewController")


//restaurant routes

router.post("/",restaurantController.createRestaurant);
router.get("/",restaurantController.getRestaurants);
router.get("/:restaurantId",restaurantController.getRestaurant);
router.put("/:restaurantId",restaurantController.updateRestaurant);

router.post("/:restaurantId/reviews",reviewController.createReview);
router.get("/:restuarantId/reviews",reviewController.getReviews);

module.exports =router ;