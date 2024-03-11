const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const User = sequelize.define("User", {
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
});

const Course = sequelize.define("Course", {
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

const Modules = sequelize.define("Modules", {
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

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Your existing route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.post("/create-course", async (req, res) => {
  const { Course_Name, Course_Type, Price, Image_Path } = req.body;

  try {
    const course = await Course.create({
      Course_Name,
      Course_Type,
      Price,
      Image_Path,
    });

    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/get-courses", async (req, res) => {
  try {
    const courses = await Course.findAll();

    res.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/delete-course/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.destroy();

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/update-course/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const { Course_Name, Course_Type, Price } = req.body;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Update course details
    course.Course_Name = Course_Name;
    course.Course_Type = Course_Type;
    course.Price = Price;
    await course.save();

    res.status(200).json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/delete-course-by-last-child", async (req, res) => {
  const { courseId } = req.body;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.destroy();

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to add a new module to a course
app.post("/add-module/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const { Sub_Module_Name, File_Path, FileType } = req.body;

  try {
    const module = await Modules.create({
      Sub_Module_Name,
      File_Path,
      FileType,
      CourseId: courseId,
    });
    res.json({ message: "Module added successfully", module });
  } catch (error) {
    console.error("Error adding module:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete a module
app.delete("/delete-module/:moduleId", async (req, res) => {
  const moduleId = req.params.moduleId;

  try {
    await Modules.destroy({ where: { id: moduleId } });
    res.json({ message: "Module deleted successfully" });
  } catch (error) {
    console.error("Error deleting module:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { app, sequelize, User, Course, Modules };
