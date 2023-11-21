const express = require("express");
const router = express.Router();
const userFitness = require("../models/userBMI");


router.post("/create", async (req, res) => {
    const { userId,height,weight,age,gender,Activity } = req.body;

    // checking if already a document exists with userId.
    const user= await userFitness.findOne({ userId: userId });
    if (user) {
        return res.send(user);
    }else{
        const bmi=weight/(height*height);
        const activityScale={"Sedentary":1.2,"Moderately active":1.55,"Vigorously active":1.725,"Extremely active":1.9}
        const BMR=(gender==="Male"?((10 * weight)+ (6.25 * height) - (5 * age) + 5):10 * weight + 6.25 * height - 5 * age - 161);


        const maintenanceCalories=BMR*activityScale[Activity];


        const User = new userFitness({
            userId: userId,
            maintenanceCalories:maintenanceCalories,
            bmi:bmi,
            gender:gender,
            age:age
        });
    
        try {
            await User.save();
            res.send(User);
        } catch (err) {
            res.status(400).send(err);
        }
    }
});


module.exports = router;
