const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  DietPlan: {
    name: String,
    description: String,
  },
  CalorieTracker: {
    date: Date,
    caloriesConsumed: Number,
  },
  NutrientTracker: {
    date: Date,
    nutrients: {
      vitaminA: Number,
      vitaminC: Number,
      calcium: Number,
      iron: Number,
    },
  },
  WaterIntakeTracker: {
    date: Date,
    ouncesConsumed: Number,
  },
});