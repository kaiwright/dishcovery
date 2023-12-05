var container = document.getElementById('container');

toggle = () => {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
};

setTimeout(() => {
  container.classList.add('sign-in');
}, 200);

function clearSignUpInputs() {
  // Reset sign-up form inputs
  document.getElementById('signup-username').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('signup-confirm-password').value = '';
}

function registerUser() {
  var username = document.getElementById('signup-username').value;
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  // Check if there is existing user data in local storage
  var storedUserDataJSON = localStorage.getItem('userData');
  var allUsers = [];

  try {
    // Attempt to parse storedUserDataJSON
    if (storedUserDataJSON) {
      allUsers = JSON.parse(storedUserDataJSON);
    }
  } catch (error) {
    // Handle JSON parsing error
    console.error('Error parsing JSON:', error);
  }

  // Check if the user is already registered by email
  var existingUser = allUsers.find(user => user.email === email);

  if (existingUser) {
    // User is already registered, send an alert and redirect to sign-in
    alert('Your profile already exists. Please sign in.');
    window.location.href = '';  // Add your sign-in page URL here
    return;
  }

  // Add the new user to the array
  var newUser = {
    username: username,
    email: email,
    password: password,
  };

  // Check if storedUserData is an array
  if (Array.isArray(allUsers)) {
    allUsers.push(newUser);
  } else {
    // Convert the existing user data to an array
    allUsers = [newUser];
  }

  // Save the array back to local storage
  localStorage.setItem('userData', JSON.stringify(allUsers));

  alert('Registration successful!');

  // Redirect to user preferences after the first-time registration
  window.location.href = 'userPreference.html';  // Redirect to userPreference.html

  // Clear sign-up form inputs
  clearSignUpInputs();
}

document.getElementById('signup-button').addEventListener('click', registerUser);

document.addEventListener('DOMContentLoaded', () => {
  // Clear sign-up form inputs when the page is loaded
  clearSignUpInputs();

  var storedUserDataJSON = localStorage.getItem('userData');
  if (storedUserDataJSON) {
    var allUsers = JSON.parse(storedUserDataJSON);

    // Check if the first user is already registered
    if (allUsers.length > 0 && allUsers[0].username) {
      // User is already registered, redirect to the dashboard
      window.location.href = '';  // Add your dashboard page URL here
    } else {
      // Populate sign-in inputs with stored username and password
      if (allUsers.length > 0) {
        document.getElementById('signin-username').value = allUsers[0].username;
        document.getElementById('signin-password').value = allUsers[0].password;
      }
    }
  } else {
    // No user data found, stay on the registration page
  }
});
