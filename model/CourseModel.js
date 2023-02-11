
const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    coursename: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    coursecode: {
        type: String,
        required: true,
        unique: true,
    },
    credit: {
        type: Number,
        required: true,
        max: 5,
    },
    slots: {
        type: Number,
        required: true,
    },
    batch: {
        type: Number,
        required: true,
    },
    courseType: {
        type: String,
        // required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    department: [{
        type: String,
    }]


})

module.exports = mongoose.model("Courses", coursesSchema)