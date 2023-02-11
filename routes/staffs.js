const { addstaff, getstaffs, staffpage } = require("../controllers/staffsController");

const router = require("express").Router()

router.post("/addstaff", addstaff);
router.get("/getstaffs", getstaffs);

router.get("/staffpage", staffpage);
module.exports = router;