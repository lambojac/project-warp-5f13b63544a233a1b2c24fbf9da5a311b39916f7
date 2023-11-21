const DietPlan = require('../models/DietPlan'); // Import your DietPlan model here

// Create a new diet plan
export const createDietPlan = async (req, res) => {
  try {
    const { name, description } = req.body;
    const dietPlan = new DietPlan({ name, description });
    const savedDietPlan = await dietPlan.save();
    res.json(savedDietPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all diet plans
export const getAllDietPlans = async (req, res) => {
  try {
    const dietPlans = await DietPlan.find();
    res.json(dietPlans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific diet plan by ID
export const getDietPlanById = async (req, res) => {
  try {
    const dietPlan = await DietPlan.findById(req.params.id);
    if (!dietPlan) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }
    res.json(dietPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a diet plan by ID
export const updateDietPlan = async (req, res) => {
  try {
    const { name, description } = req.body;
    const dietPlan = await DietPlan.findByIdAndUpdate(
      req.params.id
    );
    if (!dietPlan) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }
    res.json(dietPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a diet plan by ID
export const deleteDietPlan = async (req, res) => {
  try {
    const dietPlan = await DietPlan.findByIdAndRemove(req.params.id);
    if (!dietPlan) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }
    res.json({ message: 'Diet plan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Create a new calorie tracker entry
export const createCalorieTrackerEntry = async (req, res) => {
  try {
    const { date, caloriesConsumed } = req.body;
    const calorieTracker = new CalorieTracker({ date, caloriesConsumed });
    const savedCalorieTracker = await calorieTracker.save();
    res.json(savedCalorieTracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all calorie tracker entries
export const getAllCalorieTrackerEntries = async (req, res) => {
  try {
    const calorieTrackerEntries = await CalorieTracker.find();
    res.json(calorieTrackerEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific calorie tracker entry by ID
export const getCalorieTrackerEntryById = async (req, res) => {
  try {
    const calorieTracker = await CalorieTracker.findById(req.params.id);
    if (!calorieTracker) {
      return res.status(404).json({ error: 'Calorie tracker entry not found' });
    }
    res.json(calorieTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a calorie tracker entry by ID
export const updateCalorieTrackerEntry = async (req, res) => {
  try {
    const { date, caloriesConsumed } = req.body;
    const calorieTracker = await CalorieTracker.findByIdAndUpdate(
      req.params.id,
      { date, caloriesConsumed },
      { new: true }
    );
    if (!calorieTracker) {
      return res.status(404).json({ error: 'Calorie tracker entry not found' });
    }
    res.json(calorieTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a calorie tracker entry by ID
export const deleteCalorieTrackerEntry = async (req, res) => {
  try {
    const calorieTracker = await CalorieTracker.findByIdAndRemove(req.params.id);
    if (!calorieTracker) {
      return res.status(404).json({ error: 'Calorie tracker entry not found' });
    }
    res.json({ message: 'Calorie tracker entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Create a new nutrient tracker entry
export const createNutrientTrackerEntry = async (req, res) => {
  try {
    const { date, nutrients } = req.body;
    const nutrientTracker = new NutrientTracker({ date, nutrients });
    const savedNutrientTracker = await nutrientTracker.save();
    res.json(savedNutrientTracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all nutrient tracker entries
export const getAllNutrientTrackerEntries = async (req, res) => {
  try {
    const nutrientTrackerEntries = await NutrientTracker.find();
    res.json(nutrientTrackerEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific nutrient tracker entry by ID
export const getNutrientTrackerEntryById = async (req, res) => {
  try {
    const nutrientTracker = await NutrientTracker.findById(req.params.id);
    if (!nutrientTracker) {
      return res.status(404).json({ error: 'Nutrient tracker entry not found' });
    }
    res.json(nutrientTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a nutrient tracker entry by ID
export const updateNutrientTrackerEntry = async (req, res) => {
  try {
    const { date, nutrients } = req.body;
    const nutrientTracker = await NutrientTracker.findByIdAndUpdate(
      req.params.id,
      { date, nutrients },
      { new: true }
    );
    if (!nutrientTracker) {
      return res.status(404).json({ error: 'Nutrient tracker entry not found' });
    }
    res.json(nutrientTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a nutrient tracker entry by ID
export const deleteNutrientTrackerEntry = async (req, res) => {
  try {
    const nutrientTracker = await NutrientTracker.findByIdAndRemove(req.params.id);
    if (!nutrientTracker) {
      return res.status(404).json({ error: 'Nutrient tracker entry not found' });
    }
    res.json({ message: 'Nutrient tracker entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Create a new water intake tracker entry
export const createWaterIntakeTrackerEntry = async (req, res) => {
  try {
    const { date, ouncesConsumed } = req.body;
    const waterIntakeTracker = new WaterIntakeTracker({ date, ouncesConsumed });
    const savedWaterIntakeTracker = await waterIntakeTracker.save();
    res.json(savedWaterIntakeTracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all water intake tracker entries
export const getAllWaterIntakeTrackerEntries = async (req, res) => {
  try {
    const waterIntakeTrackerEntries = await WaterIntakeTracker.find();
    res.json(waterIntakeTrackerEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific water intake tracker entry by ID
export const getWaterIntakeTrackerEntryById = async (req, res) => {
  try {
    const waterIntakeTracker = await WaterIntakeTracker.findById(req.params.id);
    if (!waterIntakeTracker) {
      return res.status(404).json({ error: 'Water intake tracker entry not found' });
    }
    res.json(waterIntakeTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a water intake tracker entry by ID
export const updateWaterIntakeTrackerEntry = async (req, res) => {
  try {
    const { date, ouncesConsumed } = req.body;
    const waterIntakeTracker = await WaterIntakeTracker.findByIdAndUpdate(
      req.params.id,
      { date, ouncesConsumed },
      { new: true }
    );
    if (!waterIntakeTracker) {
      return res.status(404).json({ error: 'Water intake tracker entry not found' });
    }
    res.json(waterIntakeTracker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a water intake tracker entry by ID
export const deleteWaterIntakeTrackerEntry = async (req, res) => {
  try {
    const waterIntakeTracker = await WaterIntakeTracker.findByIdAndRemove(req.params.id);
    if (!waterIntakeTracker) {
      return res.status(404).json({ error: 'Water intake tracker entry not found' });
    }
    res.json({ message: 'Water intake tracker entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





