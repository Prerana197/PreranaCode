// Function to validate form
function validateForm() {
  const form = document.getElementById('bookForm');
  const inputs = form.querySelectorAll('input, select, textarea');
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
    }
  });

  if (allFilled) {
    showAlert('Booking successful!', 'alert-success', 3000); 
  } else {
    showAlert('Please fill in all fields.', 'alert-error', 3000); 
  }
}

// Function to show an alert message
function showAlert(message, alertType, timeout = 0) {
  removeExistingAlert();

  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', alertType);
  alertDiv.textContent = message;

  const form = document.getElementById('bookForm');
  form.parentNode.insertBefore(alertDiv, form);

  
  if (timeout > 0) {
    setTimeout(() => {
      removeExistingAlert();
    }, timeout);
  }
}


function removeExistingAlert() {
  const form = document.getElementById('bookForm');
  const existingAlert = form.parentNode.querySelector('.alert');

  if (existingAlert) {
    existingAlert.remove();
  }
}

document.getElementById('bookNow').addEventListener('click', function() {
      document.querySelector('#book-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
    // JavaScript for handling registration form submission and validation

document.addEventListener('DOMContentLoaded', function () {
  // Function to validate the registration form
  function validateForm() {
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;

    // Perform basic validation, checking if fields are not empty
    if (fullname.trim() === '' || contact.trim() === '' || dob.trim() === '' || email.trim() === '' || password.trim() === '' || gender.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }

    // Validation passed
    alert('Registration successful!');
    return true;
  }

  // Function to validate the login form
  function validateLoginForm() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Perform basic validation, checking if fields are not empty
    if (loginEmail.trim() === '' || loginPassword.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }

    // Validation passed
    alert('Login successful!');
    return true;
  }

  // Get the registration form element inside the registration modal
  var registrationModalForm = document.getElementById('registrationForm');
  if (registrationModalForm) {
    registrationModalForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        // If validation passes, you can perform further actions, such as form submission
        // registrationModalForm.submit(); // Submit the form
      }
    });
  }

  // Get the login form element inside the login modal
  var loginModalForm = document.getElementById('loginForm');
  if (loginModalForm) {
    loginModalForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateLoginForm()) {
        // If validation passes, you can perform further actions, such as form submission
        // loginModalForm.submit(); // Submit the form
      }
    });
  }

  // Close other modal when opening Registration modal
  var registrationLink = document.querySelector('.btn-register');
  if (registrationLink) {
    registrationLink.addEventListener('click', function () {
      $('.modal').modal('hide');
    });
  }

  // Close other modal when opening Login modal
  var loginLink = document.querySelector('.btn-login');
  if (loginLink) {
    loginLink.addEventListener('click', function () {
      $('.modal').modal('hide');
    });
  }

  // Function to close Register modal when clicking on "Already registered? Login" link
  var loginModalLink = document.querySelector('#registrationModal a[data-toggle="modal"]');
  if (loginModalLink) {
    loginModalLink.addEventListener('click', function () {
      $('#registrationModal').modal('hide');
    });
  }

  // Function to close Login modal when clicking on "Not registered yet? Register" link
  var registerModalLink = document.querySelector('#loginModal a[data-toggle="modal"]');
  if (registerModalLink) {
    registerModalLink.addEventListener('click', function () {
      $('#loginModal').modal('hide');
    });
  }
});










