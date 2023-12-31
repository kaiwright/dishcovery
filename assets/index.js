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
  document.getElementById('signup-password').value = '';
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button-modal1").addEventListener('click', function() {
    document.getElementById('modal1').classList.remove('modal-visible');
  });

});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button-modal2").addEventListener('click', function() {
    document.getElementById('modal2').classList.remove('modal-visible');
  });
  
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button-modal3").addEventListener('click', function() {
    document.getElementById('modal3').classList.remove('modal-visible');
  });
  
});

function registerUser() {
  var username = document.getElementById('signup-username').value;
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  // Check if any of the inputs are empty
  if (!username || !email || !password) {
    // If any field is not filled, show the Bootstrap modal
    document.getElementById('modal1').classList.add('modal-visible');
    return;  
  }
  // Check if there is existing user data in local storage
  var storedUserData = localStorage.getItem('userData');
  var registeredUsers = [];

  try {
    // Attempt to parse storedUserDataJSON
    if (storedUserData) {
      registeredUsers = JSON.parse(storedUserData);
    }
  } catch (error) {
    // Handle JSON parsing error
    console.error('Error parsing JSON:', error);
  }
  // Check if the user is already registered by email
  var existingUser = registeredUsers.find(user => user.email === email);
  
  if (existingUser) {
    document.getElementById('modal2').classList.add('modal-visible');
    console.log ("exist");
    return;
  }
  // Add the new user to the array
  var currUser = {
    username: username,
    email: email,
    password: password,
    preferences: {}
  };

  // Check if storedUserData is an array
  if (Array.isArray(registeredUsers)) {
    registeredUsers.push(currUser);
  } else {
    // Convert the existing user data to an array
    registeredUsers = [currUser];
  }

  // Save the array back to local storage
  localStorage.setItem('userData', JSON.stringify(registeredUsers));
  localStorage.setItem('currUser', JSON.stringify(currUser));

  // Redirect to user preferences after the first-time registration
  window.location.href = 'userPreference.html';

  // Clear sign-up form inputs
  clearSignUpInputs();
}

document.getElementById('signup-button').addEventListener('click', registerUser);

  var storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    var registeredUsers = JSON.parse(storedUserData);

    // Check if the first user is already registered
    if (registeredUsers.length > 0 && registeredUsers[0].email) {

      // User is already registered, redirect to sign in form
      container.classList.toggle('sign-in');

      // Populate sign-in inputs with stored username and password
      document.getElementById('signin-username').value = registeredUsers[0].username;
      document.getElementById('signin-password').value = registeredUsers[0].password;
    }
  } else {
    // No user data found, stay on the registration page
  }

document.getElementById('signin-button').addEventListener('click', () => {
  var storedUserData = localStorage.getItem('userData');
  var registeredUsers = [];

  try {
    // Attempt to parse storedUserDataJSON
    if (storedUserData) {
      registeredUsers = JSON.parse(storedUserData);
    }
  } catch (error) {
    // Handle JSON parsing error
    console.error('Error parsing JSON:', error);
  }
  var username = document.getElementById('signin-username').value

  // Check if the user is already registered by email
  var currUser = registeredUsers.find(user => user.username === username);
  
  if (typeof currUser !== 'object'){
    document.getElementById('modal3').classList.add('modal-visible');
} else {

    localStorage.setItem('currUser', JSON.stringify(currUser));
    // After successful sign-in, redirect to the dashboard
    window.location.href = 'dashboard.html';

}});


