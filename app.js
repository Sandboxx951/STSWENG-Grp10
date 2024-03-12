const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises; // Import fs module with promises
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
Modules.belongsTo(Course, { foreignKey: 'courseId' });

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


// Route for moduel deletetion
app.delete('/delete-module/:moduleId/:courseId', async (req, res) => {
    const moduleId = req.params.moduleId;
    const courseId = req.params.courseId;

    console.log(`Received DELETE request for module ${moduleId} in course ${courseId}`);

    try {
        // Add a condition to ensure the module is associated with the specified course
        await Modules.destroy({ where: { id: moduleId, CourseId: courseId } });
        res.json({ message: 'Module deleted successfully' });
    } catch (error) {
        console.error('Error deleting module:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Your existing route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});


// Route to create a course 
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


// Route to handle module creation (Create)
app.post('/create-module', upload.single('moduleFile'), async (req, res) => {
    const { subModuleName, fileType, courseId } = req.body;

    try {
        // Get the original file name and extension
        const originalFileName = req.file.originalname;
        const fileExtension = path.extname(originalFileName);

        // Create a new file name with the appropriate extension based on fileType
        let newFileName;
        if (fileType === 'Video') {
            newFileName = `${subModuleName}.mp4`;
        } else if (fileType === 'Document') {
            newFileName = `${subModuleName}.pdf`;
        } else {
            newFileName = originalFileName; // Use original file name if fileType is not specified or unknown
        }

        // Move the uploaded file to the desired path with the new file name
        const newFilePath = path.join(__dirname, 'uploads', newFileName);
        await fs.rename(req.file.path, newFilePath); // Use await to wait for the asynchronous operation

        // Create a new module with the provided data
        const module = await Modules.create({
            subModuleName,
            fileType,
            CourseId: courseId,
            filePath: `uploads/${newFileName}` // Save the file path relative to the 'uploads' directory
        });

        // Rename the file with the appropriate extension in the system
        const newFullFilePath = path.join(__dirname, 'uploads', newFileName);
        await fs.rename(newFilePath, newFullFilePath);

        res.json({ message: 'Module added successfully' });
    } catch (error) {
        console.error('Error creating module:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get modules for a specific course (Read)
app.get('/courses/:courseId/modules', async (req, res) => {
    const courseId = req.params.courseId;

    try {
        // Find the course by ID
        const course = await Course.findByPk(courseId, {
            include: Modules // Include the Modules associated with the course
        });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const modules = course.Modules; // Access the modules associated with the course
        res.json(modules);
    } catch (error) {
        console.error('Error fetching modules for course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to serve module files (Read files)
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to serve module files
app.get('/modules/:filename', async (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);

    try {
        // Check if the file exists
        await fs.access(filePath);

        // Stream the file to the client
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } catch (error) {
        console.error('Error serving module file:', error);
        res.status(404).json({ error: 'Module file not found' });
    }
});



module.exports = { app, sequelize, User, Course, Modules, UserCourse };