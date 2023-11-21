const HealthTracker = require('./db.js');

// Create a new diet plan
const createDietPlan = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate input
    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required for a diet plan." });
    }

    // Create a new diet plan
    const newDietPlan = {
      name,
      description,
    };

    // Add the diet plan to the health tracker
    const healthTracker = new HealthTracker({ dietPlan: newDietPlan });
    await healthTracker.save();

    res.status(201).json(healthTracker.dietPlan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all diet plans
const getAllDietPlans = async (req, res) => {
  try {
    const healthTrackers = await HealthTracker.find({}, 'dietPlan');
    const dietPlans = healthTrackers.map((tracker) => tracker.dietPlan);
    res.json(dietPlans);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific diet plan by ID
const getDietPlanById = async (req, res) => {
  try {
    const healthTracker = await HealthTracker.findById(req.params.id, 'dietPlan');
    
    if (!healthTracker) {
      return res.status(404).json({ message: "Diet plan not found" });
    }

    res.json(healthTracker.dietPlan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a diet plan by ID
const updateDietPlanById = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate input
    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required for a diet plan." });
    }

    // Update the diet plan
    const updatedHealthTracker = await HealthTracker.findByIdAndUpdate(
      req.params.id,
      { 'dietPlan.name': name, 'dietPlan.description': description },
      { new: true }
    );

    if (!updatedHealthTracker) {
      return res.status(404).json({ message: "Diet plan not found" });
    }

    res.json(updatedHealthTracker.dietPlan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a diet plan by ID
const deleteDietPlanById = async (req, res) => {
  try {
    const deletedHealthTracker = await HealthTracker.findByIdAndRemove(req.params.id, 'dietPlan');

    if (!deletedHealthTracker) {
      return res.status(404).json({ message: "Diet plan not found" });
    }

    res.json(deletedHealthTracker.dietPlan);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createDietPlan,
  getAllDietPlans,
  getDietPlanById,
  updateDietPlanById,
  deleteDietPlanById,
};
