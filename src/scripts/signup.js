import '../css/signup.css';
import {validateName, validateEmail, validatePassword, matchPassword, checkboxChecked} from './helpers/signupValidation.js';
import {submitData} from './helpers/signupUser.js';
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