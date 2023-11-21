const express = require("express");
const mongoose = require("mongoose");
const dietplan = require("./routes");

const app = express();
const DATABASE_url= ;

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

app.use("/api/health", dietplan);

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
    );
});
