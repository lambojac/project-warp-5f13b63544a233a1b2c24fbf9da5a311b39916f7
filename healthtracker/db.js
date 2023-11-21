const mongoose = require("mongoose");

const dietPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const calorieTrackerSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  caloriesConsumed: {
    type: Number,
    required: true,
  },
});

const nutrientTrackerSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  nutrients: {
    vitaminA: {
      type: Number,
      default: 0,
    },
    vitaminC: {
      type: Number,
      default: 0,
    },
    calcium: {
      type: Number,
      default: 0,
    },
    iron: {
      type: Number,
      default: 0,
    },
  },
});

const waterIntakeTrackerSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  ouncesConsumed: {
    type: Number,
    required: true,
  },
});

const healthTrackerSchema = new mongoose.Schema({
  dietPlan: dietPlanSchema,
  calorieTracker: calorieTrackerSchema,
  nutrientTracker: nutrientTrackerSchema,
  waterIntakeTracker: waterIntakeTrackerSchema,
});

const HealthTracker = mongoose.model("HealthTracker", healthTrackerSchema);

module.exports = HealthTracker;
