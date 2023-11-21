const mongoose = require("mongoose");

const StepsSchema = new mongoose.Schema({
    totalCoins:{
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0,
    },
    stepsId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    total: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0,
    },
    daily: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    yearly: {
        type: mongoose.Schema.Types.Object,
        default: {
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
        },
    },
    //   caption: {
    //     type: String,
    //     maxlength: 200,
    //     required: true,
    //   },
    //   video: {
    //     type: String,
    //     required: true,
    //   },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    //   views: {
    //     type: [
    //       {
    //         type: mongoose.Schema.Types.Object,
    //         ref: "View",
    //       },
    //     ],
    //   },
    //   reactions: {
    //     type: [
    //       {
    //         type: mongoose.Schema.Types.Object,
    //         ref: "Reaction",
    //       },
    //     ],
    //   },
    //   comments: {
    //     type: [
    //       {
    //         type: mongoose.Schema.Types.Object,
    //         ref: "Comment",
    //       },
    //     ],
    //   },
});

module.exports = mongoose.model("Steps", StepsSchema);
