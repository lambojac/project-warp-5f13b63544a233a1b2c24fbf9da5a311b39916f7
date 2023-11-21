const express= require("express")
const router=express.Router()
const{createDietPlan, getAllDietPlans, getDietPlanById,updateDietPlanById,deleteDietPlanById,}=require("./dietpllan")

router.post("/",createDietPlan)
router.get("/",getAllDietPlans)
router.get("/",getDietPlanById)
router.put("/",updateDietPlanById)
router.delete("/",deleteDietPlanById)

module.exports=router