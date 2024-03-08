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

