document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorTextarea = document.getElementById('error');

    errorTextarea.value= "";

    // Check if the email is blank
    if (email.trim() === '') {
        errorTextarea.value = 'Email cannot be blank.';
        return; // Stop further execution
    }

    const emailIsValid = validateEmail(email);
    if (!emailIsValid) {
        errorTextarea.value = 'Please enter a valid email address.';
        return; // Stop further execution
    }

    // Check for empty password
    if (password === '') {
        errorTextarea.value = 'Password cannot be empty.';
        return; // Stop further execution
    }

    // Check for password validation: minimum 8 and maximum 15 characters
    if (password.length < 8 || password.length > 15) {
        errorTextarea.value = 'Password must be between 8 and 15 characters.';
        return; // Stop further execution
    }

    
});
// Function to validate email format checking for '@' and '.'
function validateEmail(email) {
    const atSymbolPresent = email.includes('@');
    const dotPresent = email.lastIndexOf('.') > email.indexOf('@');
    return atSymbolPresent && dotPresent; // Both conditions must be true
}
