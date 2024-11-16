document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    // Show login popup
    btnLoginPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        loginForm.style.transform = 'translateX(0)';
        registerForm.style.transform = 'translateX(400px)';
    });

    // Close popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // Switch to register form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.transform = 'translateX(-400px)';
        registerForm.style.transform = 'translateX(0)';
    });

    // Switch back to login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.transform = 'translateX(0)';
        registerForm.style.transform = 'translateX(400px)';
    });
});



function validate() {
    var email = document.getElementById("email");
    var regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    var pass = document.getElementById("password");
    var errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.innerHTML = "";

    // Check if the email is valid
    if (!regex.test(email.value)) {
        errorMessage.innerHTML = "Sorry, invalid email ID";
        return false;
    }

    // Check if the password is empty
    if (pass.value == "") {
        errorMessage.innerHTML = "Blank password not allowed";
        return false;
    }

    return true; // Only submit if both validations pass
}


function validate_registration() {
    var email = document.getElementById("remail");
    var regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    var pass = document.getElementById("reg-password");
    var uname = document.getElementById("uname");
    var errorMessage = document.getElementById("error-reg-message");

    // Clear any previous error messages
    errorMessage.innerHTML = "";

    if (uname.value == "") {
        errorMessage.innerHTML = "Invalid username ";
        return false;
    }

    // Check if the email is valid
    if (!regex.test(email.value)) {
        errorMessage.innerHTML = "Sorry, invalid email ID";
        return false;
    }

    // Check if the password is empty
    if (pass.value == "") {
        errorMessage.innerHTML = "incorrect password !";
        return false;
    }    return true; // Only submit if both validations pass
}



// Function to show the requested content section
function showContent(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach((section) => {
        section.style.display = 'none';
    });

    // Display the selected page
    document.getElementById(page).style.display = 'block';
}


    

