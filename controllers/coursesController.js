const Courses = require("../model/CourseModel");
const selectedCourses = require("../model/SelectCourseModel")
module.exports.addcourses = async (req, res, next) => {
    try {
        const { coursename, coursecode, credit, slots, batch, coursetype, optradio, checkbox } = req.body;

        const data = await Courses.create({
            coursename,
            coursecode,
            credit,
            slots,
            batch,
            courseType: coursetype,
            semester: optradio,
            department: checkbox,
        })
        // if(deptarment=="")
        // const dept = await 

        if (data)
            return res.send("Course added successfully");
        else
            return res.send("failed to add course")


    }
    catch (err) {
        console.log(err)
        next(err)
    }

}

module.exports.getcourses = async (req, res, next) => {
    try {

        const courses = await Courses.find({})

        const projectedCourses = courses.map((courses) => {
            console.log(courses);
        })
        req.courses = courses;
        return res.render("table-datatable", { courses, email: req.email });
        // res.json()
    }
    catch (err) {
        next(err);
    }
}

module.exports.getselectedcourses = async (req, res, next) => {
    try {
        const { yearSelect, courseSelect } = req.body;
        console.log(yearSelect, courseSelect)
        const courses = await Courses.find({
        })
        return res.render("table-datatable", { courses, email: req.email });
    }
    catch (err) {
        next(err)
    }
}
module.exports.deletecourse = async (req, res, next) => {
    try {
        const { courseselect } = req.body;

        const delCourse = await Courses.deleteOne({
            coursename: "python"
        })
        console.log(courseselect)
    }
    catch (err) {
        next(err)
    }
}

module.exports.registeredcourses = async (req, res, next) => {
    try {
        const courses = await selectedCourses.find({})
        // console.log(registeredcourses);
        return res.render("table-datatable", { courses, email: req.email })
    }
    catch (err) {
        console.log(err);
    }
}