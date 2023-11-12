document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-signup form');
  
    form.addEventListener('submit', function(event) {
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
  
      if (!isValidEmail(email)) {
        event.preventDefault(); // Prevent form submission if email is invalid
        // You can add an error message display or style here
        alert('Please enter a valid email address');
      }
    });
  
    function isValidEmail(email) {
      // Basic email validation with a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  