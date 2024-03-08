const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const session = require('express-session');
require('dotenv').config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files
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
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

const Modules = sequelize.define('Modules', {
    subModuleName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const UserCourse = sequelize.define('UserCourse', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id',
      },
    },
  });

User.hasMany(Course);
Course.belongsTo(User);

Course.hasMany(Modules);
Modules.belongsTo(Course);

User.belongsToMany(Course, { through: UserCourse, foreignKey: 'userId' });
Course.belongsToMany(User, { through: UserCourse, foreignKey: 'courseId' });

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

app.post('/create-course', upload.single('image'), async (req, res) => {
    const { courseName, courseType, price } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const course = await Course.create({ courseName, courseType, price, imagePath });
        res.json({ message: 'Course created successfully', course });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get all courses 
app.get('/courses', async (req, res) => {
    try {
        const Courses = await Course.findAll();
        res.json(Courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get all courses with type "General Finance"
app.get('/courses/general-finance', async (req, res) => {
    try {
        const generalFinanceCourses = await Course.findAll({ where: { courseType: 'General Finance' } });
        res.json(generalFinanceCourses);
    } catch (error) {
        console.error('Error fetching general finance courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get all courses with type "Real Estate"
app.get('/courses/real-estate', async (req, res) => {
    try {
        const realEstateCourses = await Course.findAll({ where: { courseType: 'Real Estate' } });
        res.json(realEstateCourses);
    } catch (error) {
        console.error('Error fetching real estate courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to delete a course by ID
app.delete('/courses/:courseId', async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        await course.destroy();
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});
// Route to update course information
app.put('/courses/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    const { courseName, price } = req.body;

    try {
        // Find the course by ID
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        // Update course information
        course.courseName = courseName;
        course.price = price;

        // Save changes to the database
        await course.save();

        res.json({ message: 'Course updated successfully', course });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Route to add a new module to a course
app.post('/add-module/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    const { subModuleName, filePath, fileType } = req.body;

    try {
        const module = await Modules.create({ subModuleName, filePath, fileType, courseId });
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

module.exports = { app, sequelize, User, Course, Modules, UserCourse };