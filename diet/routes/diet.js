const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();


//recipes finder using edamam api
router.get("/:word/:minCal/:maxCal/:mealType/:dietType/:health/:cuisine", async (req, res) => {
    // dietType=["balanced","high-fiber","high-protien","low-carb","low-fat","low-sodium",]
    //https://developer.edamam.com/edamam-docs-recipe-api api documentation
    const{word,minCal,maxCal,mealType,dietType,health,cuisine}=req.params;
    if(word && minCal && maxCal && mealType&& dietType && health&& cusisine){
        try {
            const result=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=ca59f0e6&app_key=b1d1973e401889db7c0fa8615c462a34&diet=${dietType}&cuisineType=${cuisine}&health=${health}&mealType=${mealType}&calories=${minCal}-${maxCal}&q=${word};
            `)
            res.send(result.data.hits)         
        } catch (error) {
            res.send(error)
        }
    }
   



});

// router.post("/mealPlan",async(req,res)=>{
//     const {username,firstName,lastName,email}=req.body;
//     const result=await axios.post("https://api.spoonacular.com/users/connect&apiKey=cbbd95214cf2467cbd52685979c23491",{
//         "username": username,
//         "firstName": firstName,
//         "lastName": lastName,
//         "email": email
//     })
//     res.send(result.data);
// })

//meal plan maker based on calories and dietType using spoonacular
router.get("/mealpan/:calories/:dietType",async(req,res)=>{
    const {calories,dietType}=req.params;
    if(calories && dietType){
        try {
            const result=await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=cbbd95214cf2467cbd52685979c23491&timeFrame=week&targetCalories=${calories}&diet=${dietType}`)
            res.send(result.data)        
        } catch (error) {
            res.send(error)
        }
    }
    
})
module.exports = router;
