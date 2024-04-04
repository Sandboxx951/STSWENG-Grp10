import './StyleCourses.css';

console.log('INSIDE FILE MIGUI');

// Toggle the admin dropdown visibility
function toggleAdminDropdown(clickedElement) {
    var adminDropdown = clickedElement.closest('.dropdown');
    var adminDropdownContent = adminDropdown.querySelector('.dropdown-content');

    // Toggle the dropdown visibility
    adminDropdown.classList.toggle('active');
    adminDropdownContent.classList.toggle('hover');
}

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
    } elsadwe {
        // Handle the case where no course name is entered (you can show an error message, for example)
        alert('Please enter a course name.');
    }
}

// Function to handle course editing
async function editCourse(courseId) {
    // Get the updated course name and price from the user
    cont newCourseName = prompt('Enter the new course name:');
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
                price: newPrice,
                courseType: 'Real Estate' // Set the course type to Real Estate
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

// Function to handle course deletion
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

// Toggle the module form visibility
/*function toggleAddModuleForm() {
    var addModuleFormContainer = document.getElementById('addModuleFormContainer');
    addModuleFormContainer.style.display = addModuleFormContainer.style.display === 'none' ? 'block' : 'none';
}*/

// Call this function to fetch and display courses when the page loads
document.addEventListener('DOMContentLoaded', async function() {
    await fetchAndDisplayCourses();
});

// Function to handle adding a new course
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to form submission
    document.getElementById('addCourseForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(this);

        try {
            // Append the course type to the form data
            formData.append('courseType', 'Real Estate');

            // Send form data to server
            const response = await fetch('/create-course', {
                method: 'POST',
                body: formData
            });
                
            if (response.ok) {
                // Clear form fields on successful submission
                this.reset();
                alert('Course created successfully');
                fetchAndDisplayCourses();
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


// Function to toggle the visibility of the add course form
function toggleAddCourseForm() {
    var addCourseFormContainer = document.getElementById('addCourseFormContainer');
    addCourseFormContainer.style.display = addCourseFormContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle the visibility of the add module form
function toggleAddModuleForm() {
    var addModuleFormContainer = document.getElementById('addModuleFormContainer');
    addModuleFormContainer.style.display = addModuleFormContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to update accepted file types based on selected file type
function updateAcceptedFileTypes() {
    const fileTypeSelect = document.getElementById('fileType');
    const moduleFileInput = document.getElementById('moduleFile');

    // Get the selected file type
    const selectedFileType = fileTypeSelect.value;

    // Define accepted file types based on the selected file type
    let acceptedFileTypes = '';

    if (selectedFileType === 'Video') {
        acceptedFileTypes = '.mp4, .avi, .mov'; // Add supported video file types
    } else if (selectedFileType === 'Document') {
        acceptedFileTypes = '.pdf, .doc, .docx, .txt, .jpg, .png'; // Add supported document file types
    }

    // Update the accept attribute of the file input
    moduleFileInput.setAttribute('accept', acceptedFileTypes);
}

// Function to fetch and display Real Estate courses
async function fetchAndDisplayCourses() {
    try {
        const response = await fetch('/courses/real-estate');
        if (response.ok) {
            const courses = await response.json();
            console.log('Courses:', courses);
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = ''; // Clear previous content
            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course-row'; // Add class for styling
                courseElement.innerHTML = `
                    <div class="course-info" style="color: white;">
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


// Function to fetch and populate the course dropdown for adding modules
async function fetchAndPopulateCourseDropdown() {
    try {
        const response = await fetch('/realestate/courses'); // Update the API endpoint to fetch RE courses
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

// Function to add a new module
async function addModule() {
    const subModuleName = document.getElementById('subModuleName').value;
    const fileType = document.getElementById('fileType').value;
    const courseId = document.getElementById('courseDropdown').value;

    try {
        const formData = new FormData();
        formData.append('subModuleName', subModuleName);
        formData.append('fileType', fileType);
        formData.append('courseId', courseId);
        formData.append('moduleFile', document.getElementById('moduleFile').files[0]);

        const response = await fetch('/realestate/add-module', { // Update the API endpoint to add RE modules
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

// Function to fetch and display modules for a specific course
async function fetchAndDisplayModules(courseId) {
    try {
        const response = await fetch(`/realestate/courses/${courseId}/modules`); // Update the API endpoint to fetch RE modules
        if (response.ok) {
            const modules = await response.json();
            const modulesList = document.getElementById(`moduleList_${courseId}`);
            modulesList.innerHTML = ''; // Clear previous content
            modules.forEach(module => {
                const moduleElement = document.createElement('div');
                moduleElement.className = 'module-row'; // Add class for styling
                moduleElement.innerHTML = `
                    <div>${module.subModuleName}</div>
                    <div class="module-actions">
                        <button onclick="editModule(${module.id})">Edit</button>
                        <button onclick="deleteModule(${module.id})">Delete</button>
                    </div>
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

// Function to fetch and display courses with modules when the page loads
document.addEventListener('DOMContentLoaded', async function() {
    await fetchAndDisplayCourses();
    await fetchAndPopulateCourseDropdown();
});
