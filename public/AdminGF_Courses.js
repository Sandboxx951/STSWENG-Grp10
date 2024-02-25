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


// Edit course functionality (replace with actual code)
function editCourse() {
    alert('Edit Course functionality - Replace this with your actual code');
}

function deleteCourse(dropdownNumber) {
    // Get the dropdown content element
    var dropdownContent = document.getElementById('dropdownContent' + dropdownNumber);

    // Find the last child (last added course) and remove it
    var lastCourse = dropdownContent.lastChild;

    if (lastCourse) {
        // Remove the last course element
        dropdownContent.removeChild(lastCourse);
    } else {
        // No courses to delete
        alert('No courses to delete.');
    }
}









