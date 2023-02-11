const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const courseRoutes = require("./routes/courses");
const staffRoutes = require("./routes/staffs");
const authRoutes = require("./routes/auth");
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser')
const { isLoggedIn } = require('./controllers/usersController');
require("dotenv").config();

const app = express();
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(cookieparser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use("/public", express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/courses", isLoggedIn, courseRoutes);
app.use("/api/staffs", isLoggedIn, staffRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(() => {
    console.log("Db connected successfully")
}).catch((err) => {
    console.log(err.message);
})

app.get('/', isLoggedIn, (req, res) => {
    const email = req.email;
    res.render('index', { email });
})

app.get('/staffs', isLoggedIn, (req, res) => {
    const email = req.email;
    res.redirect('/api/staffs/staffpage')
})

app.get('/registerDetails', isLoggedIn, (req, res) => {
    const courses = req.courses;
    const email = req.email;
    res.redirect('api/courses/registeredcourses')
})

app.get('/deleteCourse', isLoggedIn, (req, res) => {
    const email = req.email;
    res.render('layout-dark', { email });
})

app.get('/courseList', isLoggedIn, (req, res) => {
    const email = req.email;
    res.render('layout-vertical', { email });
})

app.get('/login', (req, res) => {
    res.render('page-login', { err: " " })
})

app.get('/register', (req, res) => {
    res.render('page-register')
})
const server = app.listen(process.env.PORT, () => {
    console.log(`server started on Port ${process.env.PORT}`)

})