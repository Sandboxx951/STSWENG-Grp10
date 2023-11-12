document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.login-container form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Simulated registered user data (replace this with your actual user data)
    const registeredUsers = [
      { email: 'test@example.com', password: 'password123' },
      // Add more users if needed
    ];

    // Check if the entered email and password match any registered user
    const foundUser = registeredUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      window.location.href = 'Home.html'; // Redirect to Home.html upon successful login
    } else {
      // You can add an error message display or style here
      alert('Invalid email or password. Please try again.');
    }
  });
});
