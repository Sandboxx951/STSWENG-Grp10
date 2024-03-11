// Toggle the admin dropdown visibility
function toggleAdminDropdown(clickedElement) {
  var adminDropdown = clickedElement.closest(".dropdown");
  var adminDropdownContent = adminDropdown.querySelector(".dropdown-content");

  // Check if other dropdowns are open
  var allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach(function (dropdown) {
      if (dropdown !== adminDropdown) {
          dropdown.classList.remove("active");
          dropdown.querySelector(".dropdown-content").classList.remove("hover");
      }
  });

  // Toggle the dropdown visibility
  adminDropdown.classList.toggle("active");
  adminDropdownContent.classList.toggle("hover");
}


function addCourse(dropdownNumber) {
  // Show the modal
  var modal = document.getElementById("addCourseModal");
  modal.style.display = "block";
}

// Close the modal for adding a new course
function closeAddCourseModal() {
  // Hide the modal
  var modal = document.getElementById("addCourseModal");
  modal.style.display = "none";
}

function addNewCourse(dropdownNumber) {
  var newCourseInput = document.getElementById("newCourseInput").value;
  var newCourseTypeInput = document.getElementById("newCourseTypeInput").value;
  var newPriceInput = document.getElementById("newPriceInput").value;
  var newImagePathInput = document.getElementById("newImagePathInput").value;

  if (
    newCourseInput.trim() !== "" &&
    newCourseTypeInput.trim() !== "" &&
    newPriceInput.trim() !== "" &&
    newImagePathInput.trim() !== ""
  ) {
    closeAddCourseModal();

    // const userId = localStorage.getItem("userId");
    // console.log("UserId from localStorage:", userId);

    var data = {
      Course_Name: newCourseInput,
      Course_Type: newCourseTypeInput,
      Price: newPriceInput,
      Image_Path: newImagePathInput,
      // UserId: userId,
    };

    console.log("Data before sending to server:", data);

    fetch("/create-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var dropdownContent = document.getElementById(
          "dropdownContent" + dropdownNumber
        );
        var newCourseLink = document.createElement("a");
        newCourseLink.href = "#";
        newCourseLink.textContent = data.course.Course_Name;
        newCourseLink.setAttribute("data-course-id", data.course.id);
        dropdownContent.appendChild(newCourseLink);
      })
      .catch((error) => {
        console.error("Error creating course:", error);
      });
  } else {
    alert("Please enter all course details.");
  }
}

function fetchAndPopulateDropdown(dropdownNumber) {
  fetch("/get-courses")
    .then((response) => response.json())
    .then((data) => {
      const courses = data.courses;
      const dropdownContent = document.getElementById(
        "dropdownContent" + dropdownNumber
      );

      dropdownContent.innerHTML = "";

      courses.forEach((course) => {
        const newCourseLink = document.createElement("a");
        newCourseLink.href = "#";
        newCourseLink.textContent = course.Course_Name;
        newCourseLink.setAttribute("data-course-id", course.id);
        dropdownContent.appendChild(newCourseLink);
      });
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
}

window.onload = function () {
  fetchAndPopulateDropdown(1);
  fetchAndPopulateDropdown(2);
};

// Edit course functionality (replace with actual code)
function editCourse() {
  alert("Edit Course functionality - Replace this with your actual code");
}


function selectCourse(event, dropdownNumber) {
  var selectedCourse = event.target;
  var courseId = selectedCourse.getAttribute("data-course-id");
  var dropdownContent = document.getElementById("dropdownContent" + dropdownNumber);
  var allCourses = dropdownContent.querySelectorAll("a");
  allCourses.forEach(function(course) {
    course.classList.remove("selected");
  });
  selectedCourse.classList.add("selected");
}

function deleteCourse(dropdownNumber) {
  var selectedCourse = document.querySelector("#dropdownContent" + dropdownNumber + " a.selected");
  if (selectedCourse) {
    var courseId = selectedCourse.getAttribute("data-course-id");

    fetch("/delete-course/" + courseId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Remove the deleted course from the dropdown
      selectedCourse.remove();
    })
    .catch((error) => {
      console.error("Error deleting course:", error);
    });
  } else {
    alert("No course selected.");
  }
}

function closeEditCourseModal() {
  var editModal = document.getElementById("editCourseModal");
  editModal.style.display = "none";
}


function editCourse(dropdownNumber) {
  var selectedCourse = document.querySelector("#dropdownContent" + dropdownNumber + " a.selected");
  if (selectedCourse) {
    var courseId = selectedCourse.getAttribute("data-course-id");

    
    var courseName = selectedCourse.textContent;
    var courseType = ''; 
    var priceInput = '';

    document.getElementById("editCourseNameInput").value = courseName;
    document.getElementById("editCourseTypeInput").value = courseType;
    document.getElementById("editCoursePriceInput").value = priceInput;

    var editModal = document.getElementById("editCourseModal");
    editModal.style.display = "block";

    document.getElementById("editCourseSubmitBtn").addEventListener("click", function() {
      var newCourseName = document.getElementById("editCourseNameInput").value;
      var newCourseType = document.getElementById("editCourseTypeInput").value;
      var newPrice = document.getElementById("editCoursePriceInput").value;
      var data = {
        Course_Name: newCourseName,
        Course_Type: newCourseType,
        Price: newPrice,
      };

      fetch("/update-course/" + courseId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Close the modal after successful update
        editModal.style.display = "none";
        // Optionally, you can update the course name in the dropdown
        selectedCourse.textContent = newCourseName;
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
    });
  } else {
    alert("No course selected.");
  }
}

