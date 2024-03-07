const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const session = require('express-session'); 
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configure session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userType: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    },
});

const Course = sequelize.define('Course', {
    Course_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Course_Type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Image_Path: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

const Modules = sequelize.define('Modules', {
    Sub_Module_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    File_Path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    FileType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Course);
Course.belongsTo(User);

Course.hasMany(Modules);
Modules.belongsTo(Course);

sequelize.sync().then(async () => {
    console.log('Database synchronized');
    const adminUser = await User.findOne({ where: { id: 1 } });
    if (!adminUser) {
        await User.create({
            id: 1,
            name: 'Admin',
            email: 'admin@admin.com',
            password: '12345',
            userType: 'admin'
        });
        console.log('Admin user created');
    }
}).catch((err) => {
    console.error('Unable to sync the database:', err);
});
// Your existing route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Route to add a new course
app.post('/create-course', async (req, res) => {
    const { Course_Name, Course_Type, Price, Image_Path } = req.body;

    try {
        const course = await Course.create({ Course_Name, Course_Type, Price, Image_Path });
        res.json({ message: 'Course created successfully', course });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to add a new module to a course
app.post('/add-module/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    const { Sub_Module_Name, File_Path, FileType } = req.body;

    try {
        const module = await Modules.create({ Sub_Module_Name, File_Path, FileType, CourseId: courseId });
        res.json({ message: 'Module added successfully', module });
    } catch (error) {
        console.error('Error adding module:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to delete a module
app.delete('/delete-module/:moduleId', async (req, res) => {
    const moduleId = req.params.moduleId;

    try {
        await Modules.destroy({ where: { id: moduleId } });
        res.json({ message: 'Module deleted successfully' });
    } catch (error) {
        console.error('Error deleting module:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = { app, sequelize, User, Course, Modules };