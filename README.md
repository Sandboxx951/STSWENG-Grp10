# Real_Estate_Coaching_Site

Some Description

## Subheader

Some Description!
test

-------------------------------------
(Leaving old read me from past group for prosperitys sake)

Start of STSWENG Group 10 Edit

What is this?
- Real Estate Coaching Website, Module based System where people are able to sign up and purchase content. (Hopefully)

Prereq before running the code
- Create a .env file for the database connection details
- It should look like this: (Dont add quotation marks in the file) 
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="password"
DB_NAME="database name"

How do I run the code
- Ensure you have nodejs and a mysql server running
- Open project in terminal and do 'npm install' to make sure everything is installed correctly
- After doing the above do 'node server.js' and the terminal should say that Server is running on port 3000 which you can now access on your browser at http://localhost:3000/


Admin stuff
- The app creates a default user with these credentials assuming that there isnt any on run:
            id: 1,
            name: 'Admin',
            email: 'admin@admin.com',
            password: '12345',
            userType: 'admin'
- This is to access the admin part of the site where you can add and delete courses