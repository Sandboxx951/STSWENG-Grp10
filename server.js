

const { app, sequelize, User, Course, Modules,  UserCourse } = require('./app');
const PORT = process.env.PORT || 3000;

// Define associations between models
User.hasMany(Course);
Course.belongsTo(User);

Course.hasMany(Modules);
Modules.belongsTo(Course);

User.belongsToMany(Course, { through: UserCourse, foreignKey: 'User_ID' });
Course.belongsToMany(User, { through: UserCourse, foreignKey: 'Course_ID' });


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
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ where: { email } });

      if (user && user.password === password) {
          // Store user information in session
          req.session.user = user;
          res.json({ message: 'Login successful' });
      } else {
          res.status(401).json({ error: 'Invalid email or password' });
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
    // User is authenticated, allow access
    next();
  } else {
    // User is not authenticated, redirect to login page
    res.redirect('/login');
  }
};
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
