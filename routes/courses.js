const { addcourses, getcourses, getselectedcourses, deletecourse, registeredcourses } = require("../controllers/coursesController");


const router = require("express").Router()

router.post("/addcourse", addcourses);

router.get("/getcourses", getcourses);

router.post("/deletecourse", deletecourse);

router.get("/getselectedcourses", getselectedcourses)

router.get("/registeredcourses", registeredcourses)
module.exports = router;