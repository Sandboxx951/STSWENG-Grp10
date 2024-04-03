// Validation functions for signing up a user

// Validate name, name must not contain any special characters
function validateName(name){
    const nameRegex = /^[a-zA-Z]*([-.]?)[a-zA-Z]*$/;
    const nameSplit = name.split(" ");

    for(let i = 0; i < nameSplit.length; i++){
        if(!nameRegex.test(nameSplit[i]))
            return false;
    }

    return true;
}

// Validate email, email must be of a valid format
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailRegex.test(email))
        return false
    
    // Maximum length of email address is 320 characters according to email standards
    if(email.length > 320)
        return false;

    return true;
}

// Validate password, password must be at least 8 characters long
function validatePassword(password){

    if(password.length >= 8)
        return true;
    
    return false;
}

// Validate confirm password, must be the same as confirm passwrd
function matchPassword(password, signupConfirmPassword){

    if(password == signupConfirmPassword)  
        return true;
    
    return false;
}

// Validate if a checkbox is checked
function checkboxChecked(checkbox){
    if(checkbox.checked == false)
        return false;

    return true;
}

module.exports = {validateEmail, validateName, validatePassword, checkboxChecked, matchPassword}

