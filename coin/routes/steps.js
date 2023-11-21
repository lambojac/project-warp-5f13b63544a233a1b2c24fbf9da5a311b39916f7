const express = require("express");
const router = express.Router();
const Steps = require("../models/userSteps");




router.post("/getall", async (req, res) => {
    const {choice}=req.body
    if(choice==="total"){
        Steps.find({}, function (_err, result) {
            result.sort((a, b) => (a.total < b.total ? 1 : -1))
            res.send(result);
        });
    }else if(choice==="daily"){
        Steps.find({}, function (_err, result) {
            result.sort((a, b) => (a.daily < b.daily ? 1 : -1))
            res.send(result);
        });
    }else if(choice==="monthly"){
        const newDate = new Date();
        const docMonth = month[newDate.getMonth()];
        Steps.find({}, function (_err, result) {
            result.sort((a, b) => ((a.yearly[docMonth]) < (b.yearly[docMonth]) ? 1 : -1))
            res.send(result);
        });
    }
});

router.post("/create", async (req, res) => {
    const { userId } = req.body;

    // checking if already a document exists with userId.
    const step = await Steps.findOne({ userId: userId });
    if (step) {
        return res.send(step);
    }

    const Step = new Steps({
        userId: userId,
    });

    try {
        await Step.save();
        res.send(Step);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/check/:userId", async (req, res) => {
    const { userId } = req.params;

    const step = await Steps.findOne({ userId: userId });
    if (!step) {
        return res.status(404).send({
            status_code: 404,
            err: "User not Registered",
        });
    }
    return res.send({
        status_code: 200,
        err: "User Registered",
    });
});

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

router.post("/updateCoins",async(req,res)=>{
    const { userId,choice,coins} = req.body;

    const step = await Steps.findOne({ userId: userId });
    // if on step doc exists with the given userId.
    if (!step) {
        return res.status(404).send({
            status_code: 404,
            err: "User not Registered",
        });
    }
    if(choice==="add"){
        step.totalCoins+=coins;
    }else{
        step.totalCoins-=coins;
    }
    try {
        await step.save();
        res.send(step);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post("/add", async (req, res) => {
    const { userId, steps } = req.body;

    const step = await Steps.findOne({ userId: userId });
    // if on step doc exists with the given userId.
    if (!step) {
        return res.status(404).send({
            status_code: 404,
            err: "User not Registered",
        });
    }
    const newDate = new Date();
    const currentDate = String(newDate.getDate());
    const currentYear = String(newDate.getFullYear());

    const docDateObj = new Date(step.date);
    const docDate = String(docDateObj.getDate());
    const docMonth = month[docDateObj.getMonth()];
    const docYear = String(docDateObj.getFullYear());
    

    // if the year changes, reset the yearly obj to default.
    if (docYear !== currentYear) {
        step.yearly = {
            January: 0,
            February: 0,
            March:0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };
    }

    // date always gets updated when new steps added. (it's a timeStamp)
    step.date = newDate;
    if (currentDate !== docDate) {
        step.daily = steps;
    } else {
        step.daily += steps;
    }
    step.total += steps;
    step.yearly[docMonth] += steps;
    step.markModified("yearly");
    try {
        await step.save();
        res.send(step);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
