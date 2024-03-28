// Validation functions for signing up a user

// Validate name, name must not contain any special characters
export function validateName(name){
    const nameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    
    if(!nameRegex.test(name))
        return false;

    return true;
}

// Validate email, email must be of a valid format
export function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailRegex.test(email))
        return false
    
    return true;
}

// Validate password, password must be at least 8 characters long
export function validatePassword(password){

    if(password.length >= 8)
        return true;
    
    return false;
}

// Validate confirm password, must be the same as confirm passwrd
export function matchPassword(password, signupConfirmPassword){

    if(password == signupConfirmPassword)  
        return true;
    
    return false;
}

// Validate if a checkbox is checked
export function checkboxChecked(checkbox){
    if(checkbox.checked == false)
        return false;

    return true;
}

