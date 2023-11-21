const express = require('express');
const router = express.Router();
const {
  createDietPlan,
  getAllDietPlans,
  getDietPlanById,
  updateDietPlan,
  deleteDietPlan,
  createCalorieTrackerEntry,
  getAllCalorieTrackerEntries,
  getCalorieTrackerEntryById,
  updateCalorieTrackerEntry,
  deleteCalorieTrackerEntry,
  createNutrientTrackerEntry,
  getAllNutrientTrackerEntries,
  getNutrientTrackerEntryById,
  updateNutrientTrackerEntry,
  deleteNutrientTrackerEntry,
  createWaterIntakeTrackerEntry,
  getAllWaterIntakeTrackerEntries,
  getWaterIntakeTrackerEntryById,
  updateWaterIntakeTrackerEntry,
  deleteWaterIntakeTrackerEntry,
} = require('./controllers'); // Import your controller functions here

// Diet Plan routes
router.post('/diet-plans', createDietPlan);
router.get('/diet-plans', getAllDietPlans);
router.get('/diet-plans/:id', getDietPlanById);
router.put('/diet-plans/:id', updateDietPlan);
router.delete('/diet-plans/:id', deleteDietPlan);

// Calorie Tracker routes
router.post('/calorie-tracker', createCalorieTrackerEntry);
router.get('/calorie-tracker', getAllCalorieTrackerEntries);
router.get('/calorie-tracker/:id', getCalorieTrackerEntryById);
router.put('/calorie-tracker/:id', updateCalorieTrackerEntry);
router.delete('/calorie-tracker/:id', deleteCalorieTrackerEntry);

// Nutrient Tracker routes
router.post('/nutrient-tracker', createNutrientTrackerEntry);
router.get('/nutrient-tracker', getAllNutrientTrackerEntries);
router.get('/nutrient-tracker/:id', getNutrientTrackerEntryById);
router.put('/nutrient-tracker/:id', updateNutrientTrackerEntry);
router.delete('/nutrient-tracker/:id', deleteNutrientTrackerEntry);

// Water Intake Tracker routes
router.post('/water-intake-tracker', createWaterIntakeTrackerEntry);
router.get('/water-intake-tracker', getAllWaterIntakeTrackerEntries);
router.get('/water-intake-tracker/:id', getWaterIntakeTrackerEntryById);
router.put('/water-intake-tracker/:id', updateWaterIntakeTrackerEntry);
router.delete('/water-intake-tracker/:id', deleteWaterIntakeTrackerEntry);

module.exports = router;
