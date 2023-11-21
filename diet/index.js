const express = require("express");
const mongoose = require("mongoose");
const dietRoutes = require("./routes/diet");
const app = express();
const bodyParser = require("body-parser");
const DATABASE_url= 'mongodb+srv://abhi2811:abhi28112002%40@cluster0.5hpksjv.mongodb.net/?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
 mongoose.connect(DATABASE_url
 ).then(()=>{
    console.log('connected to abhishek database');
 }).catch(err=>{console.log(err);})

app.use(express.json());
  // app.use(bodyParser.json());

  app.use("/api/diet", dietRoutes);
  
  app.post("/test",(req,res)=>{
    res.json("Working")
  })
  app.listen(3000 , function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

