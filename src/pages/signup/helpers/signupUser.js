async function submitData(username, useremail, userpassword){

    const name = username;
    const email = useremail;
    const password = userpassword;

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
                  const data = await response.json();
                  alert(data.message);
                  document.getElementById('signup-form').reset();
                  window.location.href = 'login.html';
                  break;
                }
              } catch (error) {
                console.error('Error during signup:', error);
              }
    }
}

module.exports = {submitData}
