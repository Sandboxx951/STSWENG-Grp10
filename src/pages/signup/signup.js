import 'signup.css';
import {validateName, validateEmail, validatePassword, matchPassword, checkboxChecked} from './helpers/signupValidation.js';

import companyLogo from '../assets/images/logo.png';

// Input elements of form
const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');
const emailAgree = document.getElementById('email-agree');
const termsAgree = document.getElementById('terms-agree');

// Error elements of form
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const termsAgreeError = document.getElementById('terms-agree-error');

// Input validation
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const isValidName = validateName(signupName.value);
  const isValidEmail = validateEmail(signupEmail.value);
  const isValidPassword = validatePassword(signupPassword.value);
  const passwordsMatch = matchPassword(signupPassword.value, signupConfirmPassword.value);
  const agreedToTerms = checkboxChecked(termsAgree);

  if(!agreedToTerms)
    termsAgreeError.innerHTML = '*Please agree to the terms and conditions.';
  else
    termsAgreeError.innerHTML = '';

  if(!isValidName)
    nameError.innerHTML = '*Please enter a valid name.';
  else
    nameError.innerHTML = '';

  if(!isValidEmail)
    emailError.innerHTML = '*Please enter a valid email.';
  else
    emailError.innerHTML = '';

  if(!isValidPassword)
    passwordError.innerHTML = '*Please enter a valid password.';
  else
    passwordError.innerHTML = '';

  if(!passwordsMatch)
    confirmPasswordError.innerHTML = '*Passwords do not match.';
  else
    confirmPasswordError.innerHTML = '';

  if(isValidName && isValidEmail && isValidPassword && passwordsMatch)
    submitData(signupName.value, signupEmail.value, signupPassword.value);
})

async function submitData(username, useremail, userpassword){

    const name = username;
    const email = useremail;
    const password = userpassword;

    try {
            const response = await fetch('http://localhost:3000/signup', {
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
              window.location.href = 'Login.html';
            }
          } catch (error) {
            console.error('Error during signup:', error);
          }
}
