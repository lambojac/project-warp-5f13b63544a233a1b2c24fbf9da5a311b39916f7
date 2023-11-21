const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const bmiRoutes = require("./routes/bmi");

const app = express();

const DATABASE_url= 'mongodb+srv://abhi2811:abhi28112002%40@cluster0.5hpksjv.mongodb.net/?retryWrites=true&w=majority'; 
// const DATABASE_url =
//     "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
mongoose.Promise = global.Promise;
mongoose
    .connect(DATABASE_url)
    .then(() => {
        console.log("connected to abhishek database");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

app.use("/api/bmi", bmiRoutes);

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
    );
});
