const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
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
    }

    return true; // Only submit if both validations pass
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


    

