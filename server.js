

const { app, sequelize, User, Course, Modules,  UserCourse } = require('./app');
const PORT = process.env.PORT || 3000;
const multer = require('multer'); 
const cors = require('cors');

// Enable CORS for all origins
app.use(cors());

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/modules'); // Save uploaded modules to the 'uploads/modules' directory
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });
// Define associations between models
User.hasMany(Course);
Course.belongsTo(User);

Course.hasMany(Modules);
Modules.belongsTo(Course);

User.belongsToMany(Course, { through: UserCourse, foreignKey: 'userId' });
Course.belongsToMany(User, { through: UserCourse, foreignKey: 'courseId' });


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user with userType set to 'user'
    const user = await User.create({ name, email, password, userType: 'user' });
    res.json({ message: 'Account created successfully' });
    res.sendStatus(200);
    
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for email and if userType is 'user'
    const user = await User.findOne({ where: { email, userType: 'user' } }); 

    if(!user){
      
      return res.status(401).json({userError: '*User not found.'});
    }

    if (user && user.password != password){

      return res.status(401).json({passwordError: '*Invalid password.'})
    }

    if (user && user.password === password) {
        // Store user information in session
        req.session.user = user;
        res.json({ message: 'Login successful' });
    }
  } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for admin login
app.post('/admin-login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const admin = await User.findOne({ where: { email, password, userType: 'admin' } });

      if (admin) {
          res.json({ message: 'Admin login successful', redirectTo: '/AdminHome.html' });
      } else {
          res.status(401).json({ error: 'Invalid email or password' });
      }
  } catch (error) {
      console.error('Error finding admin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    req.user = req.session.user;
    // User is authenticated, allow access
    next();
  } else {
    // User is not authenticated, redirect to login page
    res.redirect('/login');
  }
};

// Route to handle course purchases
app.post('/courses/purchase/:courseId', isAuthenticated, async (req, res) => {
  try {
      const { courseId } = req.params;
      const userId = req.user.id; // Assuming you have a user object stored in req.user after authentication

      // Update the user's data in the database to reflect the purchased course
      const user = await User.findByPk(userId); // Fetch user from database
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      
      // Check if the user has already purchased the course
      const userCourse = await UserCourse.findOne({
          where: {
              userId: userId,
              courseId: courseId
          }
      });
      if (userCourse) {
          return res.status(400).json({ error: 'Course already purchased' });
      }

      // Add the purchased course to the user's courses
      await UserCourse.create({
          userId: userId,
          courseId: courseId
      });

      res.status(200).json({ message: 'Course purchased successfully' });
  } catch (error) {
      console.error('Error purchasing course:', error);
      res.status(500).json({ error: 'Failed to purchase course' });
  }
});

// Function to check if the user has purchased a course
async function checkUserPurchased(courseId, userId) {
  try {
      const userCourse = await UserCourse.findOne({
          where: {
              userId: userId,
              courseId: courseId
          }
      });
      return !!userCourse; // Returns true if user has purchased the course, false otherwise
  } catch (error) {
      console.error('Error checking if user purchased course:', error);
      return false;
  }
}

// Route to check if the user has purchased a course
app.get('/courses/:courseId/purchased', isAuthenticated, async (req, res) => {
  const courseId = req.params.courseId;
  const userId = req.user.id;

  try {
      const purchased = await checkUserPurchased(courseId, userId);
      res.json({ purchased });
  } catch (error) {
      console.error('Error checking if user purchased course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a list of courses
app.get('/courses', isAuthenticated, async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        console.error('Error retrieving courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Route to get modules for a specific course
app.get('/modules/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    
    try {
        const modules = await Modules.findAll({
            where: { CourseId: courseId },
        });
        res.json(modules);
    } catch (error) {
        console.error('Error retrieving modules:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get user's course list
app.get('/user-courses/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const userCourses = await Course.findAll({
            include: [
                {
                    model: User,
                    where: { id: userId },
                    attributes: [],
                },
            ],
        });
        res.json(userCourses);
    } catch (error) {
        console.error('Error retrieving user courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/profile', (req, res) => {
  if (req.session.user) {
      // User is logged in, render profile page
      res.render('profile', { user: req.session.user });
  } else {
      // User is not logged in, redirect to login page
      res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Error closing database connection:', err);
  }

  console.log('Server is shutting down');
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
});





// // Route to handle module creation
// app.post('/create-module', upload.single('moduleFile'), async (req, res) => {
//   const { subModuleName, fileType, courseId } = req.body;

//   try {
//       // Create a new module with the provided data
//       const module = await Modules.create({
//           subModuleName,
//           fileType,
//           CourseId: courseId,
//           filePath: req.file.path // Save the file path in the database
//       });

//       res.json({ message: 'Module added successfully' });
//   } catch (error) {
//       console.error('Error creating module:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


app.post('/add-module/:courseId', upload.single('moduleFile'), async (req, res) => {
  const { subModuleName, fileType, courseId } = req.body;

  try {
    // Create a new module with the provided data
    const module = await Modules.create({
      subModuleName,
      fileType,
      CourseId: courseId,
      filePath: req.file.path // Save the file path in the database
    });

    res.json({ message: 'Module added successfully' });
  } catch (error) {
    console.error('Error creating module:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});