import '../signup/signup.css';
import companyLogo from '../../assets/images/G_group_logo_transparent.png';

// NEEDED:
// Function to check if email exists within database
// Function to check if password is correct with associated email

// Get input elements
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const loginForm = document.getElementById('login-form');

// Get error elements
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    if(hasNullValues(email.value, password.value)){
        return false;
    }
    
    loginUser(email.value, password.value);
})

function hasNullValues(userEmail, userPassword){
    let hasNull = false;
    
    if(userEmail.trim() == ''){
        emailError.innerHTML = '*Field cannot be empty';
        hasNull = true;
    }
    else
        emailError.innerHTML = '';

    if(userPassword.trim() == ''){
        passwordError.innerHTML = '*Field cannot be empty';
        hasNull = true;
    }
    else
        passwordError.innerHTML = '';

    return hasNull;
}

async function loginUser(userEmail, userPassword){
    const email = userEmail;
    const password = userPassword;

    try{
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify({ email, password })
        });
    
        if(response.ok){
            const data = await response.json();
            alert(data.message);
            window.location.href = 'UserHome.html';
        }
        else{
            const errorData = await response.json();
            
            if(errorData.userError){
                emailError.innerHTML = errorData.userError;
            }
            else{
                emailError.innerHTML = '';
            }

            if(errorData.passwordError){
                passwordError.innerHTML = errorData.passwordError;
            }
            else{
                passwordError.innerHTML = '';
            }
        }
    }catch(error){
            console.error("Error: ", error);
            alert('An error has occurred. Please try again.');
            loginForm.reset();
    }
}

