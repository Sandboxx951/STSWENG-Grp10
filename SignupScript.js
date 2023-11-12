
        let users = []; // Simulating user data storage in memory

        function signup(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulating user storage in an array (in memory)
            users.push({ name, email, password });
            alert('Signed up successfully!');
            console.log(users); // For demonstration, logs the user array
        }