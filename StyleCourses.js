function toggleDropdown(clickedElement) {
    var dropdown = clickedElement.closest('.dropdown');
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    
    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('hover');
  
    // Get the second dropdown and its content
    var dropdown2 = document.getElementById('dropdown2');
  
    if (dropdown1.classList.contains('active')) {
      // If the first dropdown is active, add a class to the second dropdown to move it down
      dropdown2.classList.add('move-down');
    } else {
      // If the first dropdown is retracted, remove the class to move the second dropdown back up
      dropdown2.classList.remove('move-down');
    }
  }
  