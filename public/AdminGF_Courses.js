// Toggle the admin dropdown visibility
function toggleAdminDropdown(clickedElement) {
    var adminDropdown = clickedElement.closest('.dropdown');
    var adminDropdownContent = adminDropdown.querySelector('.dropdown-content');

    // Toggle the dropdown visibility
    adminDropdown.classList.toggle('active');
    adminDropdownContent.classList.toggle('hover');
}

// Open the modal for adding a new course
// Open the modal for adding a new course
function addCourse(dropdownNumber) {
    // Show the modal
    var modal = document.getElementById('addCourseModal');
    modal.style.display = 'block';
}

// Close the modal for adding a new course
function closeAddCourseModal() {
    // Hide the modal
    var modal = document.getElementById('addCourseModal');
    modal.style.display = 'none';
}

// Function to add a new course to the dropdown content
function addNewCourse(dropdownNumber) {
    // Get the input value from the modal
    var newCourseInput = document.getElementById('newCourseInput').value;

    // Validate that a course name is entered
    if (newCourseInput.trim() !== '') {
        // Close the modal
        closeAddCourseModal();

        // Get the dropdown content element
        var dropdownContent = document.getElementById('dropdownContent' + dropdownNumber);

    var newCourseLink = document.createElement('a');
    newCourseLink.href = '#'; // You can set the appropriate href if needed
    newCourseLink.textContent = newCourseInput;
    newCourseLink.setAttribute('data-course-id', dropdownNumber); // Set the course ID

        // Append the new course link to the dropdown content
        dropdownContent.appendChild(newCourseLink);
    } else {
        // Handle the case where no course name is entered (you can show an error message, for example)
        alert('Please enter a course name.');
    }
}


async function editCourse(courseId) {
    // Get the updated course name and price from the user
    const newCourseName = prompt('Enter the new course name:');
    const newPrice = parseFloat(prompt('Enter the new price:'));

    if (!newCourseName || isNaN(newPrice)) {
        alert('Invalid input. Please enter a valid course name and price.');
        return;
    }

    try {
        // Send a PUT request to update the course information
        const response = await fetch(`/courses/${courseId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseName: newCourseName,
                price: newPrice
            })
        });

        if (response.ok) {
            alert('Course updated successfully');
            // Refresh the course list after updating
            fetchAndDisplayCourses();
        } else {
            console.error('Failed to update course:', response.statusText);
            alert('Failed to update course.');
        }
    } catch (error) {
        console.error('Error updating course:', error.message);
        alert('Error updating course.');
    }
}

function deleteCourse(courseId) {
    // Ask for confirmation before deleting the course
    if (confirm('Are you sure you want to delete this course?')) {
        // Send a DELETE request to the server to delete the course
        fetch(`/courses/${courseId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Remove the course row from the UI if it exists
                const courseRow = document.getElementById(`courseRow_${courseId}`);
                if (courseRow) {
                    courseRow.remove();
                }
            } else {
                // Handle error response
                console.error('Failed to delete course:', response.statusText);
                alert('Failed to delete course.');
            }
        })
        .then(() => {
            // Reload the course list after deletion
            fetchAndDisplayCourses();
        })
        .catch(error => {
            console.error('Error deleting course:', error);
            alert('Error deleting course.');
        });
    }
}


// -------------------------------------------------------------------------------------------------------------------------------------

function toggleAddCourseForm() {
    var addCourseFormContainer = document.getElementById('addCourseFormContainer');
    addCourseFormContainer.style.display = addCourseFormContainer.style.display === 'none' ? 'block' : 'none';
}


async function fetchAndDisplayCourses() {
    try {
        console.log('fetchAndDisplayCourses function called');
        const response = await fetch('/courses');
        if (response.ok) {
            const courses = await response.json();
            console.log('Courses:', courses);
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = ''; // Clear previous content
            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course-row'; // Add class for styling
                courseElement.innerHTML = `
                    <div class="course-info" style="color: white;"> <!-- Added inline style for text color -->
                        <span>${course.courseName} - ${course.courseType} - $${course.price}</span>
                    </div>
                    <div class="course-actions">
                        <button onclick="editCourse(${course.id})">Edit</button>
                        <button onclick="deleteCourse(${course.id})">Delete</button>
                    </div>
                `;
                courseList.appendChild(courseElement);
            });
        } else {
            console.error('Failed to fetch courses:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to form submission
    document.getElementById('addCourseForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(this);

        try {
            console.log(formData); // Log the FormData object for debugging purposes
            // Send form data to server
            const response = await fetch('/create-course', {
                method: 'POST',
                body: formData
            });
                
            if (response.ok) {
                // Clear form fields on successful submission
                this.reset();
                alert('Course created successfully');
                fetchAndDisplayCourses()
            } else {
                console.error('Error creating course:', response.statusText);
                alert('Error creating course');
            }
        } catch (error) {
            console.error('Error creating course:', error.message);
            alert('Error creating course');
        }
    });
});

// Toggle the module form visibility
function toggleAddModuleForm() {
    var addModuleFormContainer = document.getElementById('addModuleFormContainer');
    addModuleFormContainer.style.display = addModuleFormContainer.style.display === 'none' ? 'block' : 'none';
}


// Function to add a new module
async function addModule() {
    const subModuleName = document.getElementById('subModuleName').value;
    const fileType = document.getElementById('fileType').value;
    const courseId = document.getElementById('courseDropdown').value; // Add this line if you have a course dropdown

    try {
        const formData = new FormData();
        formData.append('subModuleName', subModuleName);
        formData.append('fileType', fileType);
        formData.append('courseId', courseId);
        formData.append('moduleFile', document.getElementById('moduleFile').files[0]);

        const response = await fetch('/add-module', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Module added successfully');
            // Refresh the module list or take appropriate action
        } else {
            console.error('Error adding module:', response.statusText);
            alert('Error adding module');
        }
    } catch (error) {
        console.error('Error adding module:', error.message);
        alert('Error adding module');
    }
}

async function fetchAndPopulateCourseDropdown() {
    try {
        const response = await fetch('/courses');
        if (response.ok) {
            const courses = await response.json();
            const courseDropdown = document.getElementById('courseDropdown');

            // Clear existing options
            courseDropdown.innerHTML = '';

            // Populate the dropdown with courses
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                option.textContent = course.courseName;
                courseDropdown.appendChild(option);
            });
        } else {
            console.error('Failed to fetch courses for dropdown:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching courses for dropdown:', error);
    }
}


// Function to handle module form submission
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the module form submission
    const addModuleForm = document.getElementById('addModuleForm');
    if (addModuleForm) {
        addModuleForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get form data
            const formData = new FormData(this);

            try {
                // Send form data to server
                const response = await fetch('/create-module', { // Update the endpoint to match the server-side route
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // Clear form fields on successful submission
                    this.reset();
                    alert('Module added successfully');
                    fetchAndDisplayCoursesWithModules()
                    // Optionally, you can fetch and display modules after adding
                    // await fetchAndDisplayModules();
                } else {
                    console.error('Error adding module:', response.statusText);
                    alert('Error adding module');
                }
            } catch (error) {
                console.error('Error adding module:', error.message);
                alert('Error adding module');
            }
        });
    } else {
        console.error("Element with ID 'addModuleForm' not found.");
    }
});

async function fetchAndDisplayCoursesWithModules() {
    try {
        console.log('fetchAndDisplayCoursesWithModules function called');
        const response = await fetch('/courses');
        if (response.ok) {
            const courses = await response.json();
            console.log('Courses:', courses);
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = ''; // Clear previous content
            for (const course of courses) {
                const courseElement = document.createElement('div');
                courseElement.className = 'course-row'; // Add class for styling
                courseElement.innerHTML = `
                    <div class="course-info" style="color: white;"> <!-- Added inline style for text color -->
                        <span>${course.courseName} - ${course.courseType} - $${course.price}</span>
                        <div class="course-actions">
                        <button onclick="editCourse(${course.id})">Edit</button>
                        <button onclick="deleteCourse(${course.id})">Delete</button>
                        </div>
                        <div id="modules-${course.id}" class="modules-list"></div>
                    </div>

                `;
                courseList.appendChild(courseElement);
                await fetchAndDisplayModules(course.id); // Fetch and display modules for this course
            }
        } else {
            console.error('Failed to fetch courses:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

async function fetchAndDisplayModules(courseId) {
    try {
        console.log(`fetchAndDisplayModules function called for course ${courseId}`);
        const response = await fetch(`/courses/${courseId}/modules`);
        if (response.ok) {
            const modules = await response.json();
            console.log('Modules:', modules);
            const modulesList = document.getElementById(`modules-${courseId}`);
            modulesList.innerHTML = ''; // Clear previous content
            modules.forEach(module => {
                const moduleElement = document.createElement('div');
                moduleElement.className = 'module-row'; // Add class for styling
                moduleElement.innerHTML = `
                    <div>${module.subModuleName}</div>
                    <div class="module-content"></div> <!-- Container for module content -->
                    <button onclick="displayModuleContents('${module.filePath}', this.parentElement)">View Module</button>
                    <button onclick="updateModule(${module.id})">Update Module</button>
                    <button onclick="deleteModule(${module.id})">Delete Module</button>
                `;
                modulesList.appendChild(moduleElement);
            });
        } else {
            console.error(`Failed to fetch modules for course ${courseId}:`, response.statusText);
        }
    } catch (error) {
        console.error(`Error fetching modules for course ${courseId}:`, error);
    }
}

async function displayModuleContents(filePath, moduleContainer) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const contentType = response.headers.get('content-type');
            const moduleContent = moduleContainer.querySelector('.module-content');

            if (contentType.includes('application/pdf')) {
                // Handle displaying PDF content
                if (moduleContent.querySelector('iframe')) {
                    moduleContent.innerHTML = ''; // Clear previous content
                } else {
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    const iframe = document.createElement('iframe');
                    iframe.src = url;
                    iframe.style.width = '100%';
                    iframe.style.height = '500px'; // Adjust height as needed
                    moduleContent.innerHTML = ''; // Clear previous content
                    moduleContent.appendChild(iframe);
                }
            } else if (contentType.includes('video')) {
                // Handle displaying video content
                if (moduleContent.querySelector('video')) {
                    moduleContent.innerHTML = ''; // Clear previous content
                } else {
                    const videoUrl = URL.createObjectURL(await response.blob());
                    const videoElement = document.createElement('video');
                    videoElement.src = videoUrl;
                    videoElement.controls = true; // Show video controls
                    videoElement.style.width = '100%';
                    moduleContent.innerHTML = ''; // Clear previous content
                    moduleContent.appendChild(videoElement);
                }
            } else {
                console.error('Unsupported file type:', contentType);
                alert('Unsupported file type.');
            }
        } else {
            console.error('Failed to fetch module contents:', response.statusText);
            alert('Failed to fetch module contents.');
        }
    } catch (error) {
        console.error('Error displaying module contents:', error.message);
        alert('Error displaying module contents.');
    }
}


async function updateModule(moduleId) {
    // Implement update module logic here
    console.log(`Update module with ID ${moduleId}`);
}

async function deleteModule(moduleId) {
    // Implement delete module logic here
    console.log(`Delete module with ID ${moduleId}`);
}

// Call this function to fetch and display courses with their modules when the page loads
document.addEventListener('DOMContentLoaded', async function() {
    await fetchAndDisplayCoursesWithModules();
});