let users = [
      { email: "test@example.com", password: "test123" },
      { email: "user@example.com", password: "user456" }
      // Add more test user data here
    ];

    function login(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Check if the entered credentials match any user's credentials
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        alert('Login successful!');
        // Redirect or perform other actions after successful login
      } else {
        alert('Login failed. Invalid credentials.');
      }
    }