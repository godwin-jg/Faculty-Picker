const Staff = require("../model/StaffModel");
module.exports.addstaff = async (req, res, next) => {
    try {
        const { option1, batch, option2, noofstudents, optradio, coursename, dept } = req.body;

        const staff = await Staff.create({
            Staff_Name: option1,
            Department: option2,
            No_of_Students: noofstudents,
            Batch: batch,
            Semester: optradio,
            Course_Name: coursename,
            Department_Handle: dept,
        });
        console.log(staff);
        return res.send("staff added successfully");
    } catch (err) {
        console.log(err)
        next(err)
    }
}
module.exports.getstaffs = async (req, res, next) => {
    try {
        const { staffid } = req.body;
        const staffs = await Staff.findOne({
            Staff_Name: "Muthu Karuppan",
        })
        const id = staffid;
        const staffname = staffs.Staff_Name;
        const staffdepartment = staffs.Department;
        console.log(id, staffdepartment);

        return res.render("layout-two-column", { staffs, email: req.email });
    }
    catch (err) {
        console.log(err)
        next();
    }
}

module.exports.staffpage = async (req, res, next) => {
    try {

        return res.render("layout-two-column", {
            staffs: {
                Staff_Name: "",
                Department: "",
            }, email: req.email
        });
    }
    catch (err) {
        console.log(err);
        next();
    }
}