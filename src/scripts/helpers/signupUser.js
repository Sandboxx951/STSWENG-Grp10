export async function submitData(username, useremail, userpassword) {
  const name = username;
  const email = useremail;
  const password = userpassword;
  let success = false;

  const urls = ['http://localhost:3000/signup', 'https://stsweng-grp10-1.onrender.com/signup'];

  for (const url of urls) {
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, password }),
          });

          if (response.status === 400) {
              const data = await response.json();
              alert(data.error); // Display the error message from the server
          } else if (response.ok) {
              success = true;
              const data = await response.json();
              alert(data.message);
              document.getElementById('signup-form').reset();
              window.location.href = 'Login.html';
              break; // Exit the loop if successful
          }
      } catch (error) {
          console.error('Error during signup:', error);
      }
  }

  return success;
}
