const mongoose = require("mongoose");

const userFitnessSchema = new mongoose.Schema({
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    interestedIn:{
        type:String,
        enum:["Weight Loss","Weight Gain","Gain Muscle","Maintain Weight"]
    },
    bmi:{
        type:Number,
        required:true
    },
    Activity:{
        type:String,
        enum:["Sedentary","Moderately active","Vigorously active","Extremely active"]
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    maintenanceCalories:{
        type:Number,
        required:true
    }
    
});

module.exports = mongoose.model("userFitness", userFitnessSchema);
