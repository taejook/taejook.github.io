function addChatBox() {
  // create the button that will open the chat popup
  const chatButton = document.createElement("button");
  chatButton.classList.add("open-button");
  chatButton.textContent = "Chat with us";
  document.body.appendChild(chatButton);

  // create the chat popup element
  const chatPopup = document.createElement("div");
  chatPopup.classList.add("chat-popup");
  chatPopup.setAttribute("id", "form-container");
  document.body.appendChild(chatPopup);

  // create the form element that goes inside the popup
  const chatForm = document.createElement("form");
  chatForm.classList.add("form-container");
  chatForm.setAttribute("id", "form-container");
  chatPopup.appendChild(chatForm);

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  chatForm.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Enter Name");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", "");
  chatForm.appendChild(nameInput);


  // create the input fields and labels for the form
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  chatForm.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "Enter Email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", "");
  chatForm.appendChild(emailInput);

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  chatForm.appendChild(messageLabel);

  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("placeholder", "Type message..");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("required", "");
  chatForm.appendChild(messageInput);

  // create the submit and cancel buttons for the form
  const submitButton = document.createElement("button");
  submitButton.classList.add("btn");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Send";
  chatForm.appendChild(submitButton);

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("btn", "cancel");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  chatForm.appendChild(cancelButton);

  // add an event listener to the chat button that toggles the visibility of the popup
  chatButton.addEventListener("click", function() {
    chatPopup.style.display = "block";
  });

  // add an event listener to the cancel button that hides the popup
  cancelButton.addEventListener("click", function() {
    chatPopup.style.display = "none";
  });

  // add event listener to the form to handle submission (replace the "handleFormSubmit" function with your own)
  chatForm.addEventListener("submit", handleFormSubmit);

  // add event listener to the chat popup to close it when the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (event.target == chatPopup) {
      chatPopup.style.display = "none";
    }
  });
}

// function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  // replace this with your own code to handle the form submission
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  // replace this with your own code to handle the form submission
}

function createLoginPopup() {
  // create the login button
  const loginButton = document.createElement("button");
  loginButton.classList.add("login-button");
  loginButton.textContent = "Login";
  document.body.appendChild(loginButton);

  // create the login popup element
  const loginPopup = document.createElement("div");
  loginPopup.classList.add("login-popup");
  document.body.appendChild(loginPopup);

  // create the form element that goes inside the popup
  const loginForm = document.createElement("form");
  loginForm.classList.add("login-form");
  loginPopup.appendChild(loginForm);

  // create the username field
  const usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username";
  loginForm.appendChild(usernameLabel);

  const usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("placeholder", "Enter username");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("required", "");
  loginForm.appendChild(usernameInput);

  // create the password field
  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password";
  loginForm.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "Enter password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("required", "");
  loginForm.appendChild(passwordInput);

  // create the submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("btn");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Login";
  loginForm.appendChild(submitButton);

  // create the sign up link
  const signUpLink = document.createElement("a");
  signUpLink.textContent = "No account? Sign up";
  signUpLink.setAttribute("href", "#");
  signUpLink.addEventListener("click", function(event) {
    event.preventDefault();
    createSignUpPopup();
    loginPopup.style.display = "none";
  });
  loginForm.appendChild(signUpLink);

  // add an event listener to the login button that toggles the visibility of the popup
  loginButton.addEventListener("click", function() {
    loginPopup.style.display = "block";
  });

  // add event listener to the form to handle submission (replace the "handleLoginFormSubmit" function with your own)
  loginForm.addEventListener("submit", handleLoginFormSubmit);

  // add event listener to the login popup to close it when the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
    }
  });
}

// function to handle login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault();
  // replace this with your own code to handle the login form submission
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  console.log(`Username: ${username}\nPassword: ${password}`);
  // replace this with your own code to handle the login form submission
}

function createSignUpPopup() {
  // create the sign up popup element
  const signUpPopup = document.createElement("div");
  signUpPopup.classList.add("sign-up-popup");
  document.body.appendChild(signUpPopup);

  // create the form element that goes inside the popup
  const signUpForm = document.createElement("form");
  signUpForm.classList.add("sign-up-form");
  signUpPopup.appendChild(signUpForm);

  // create the username field
  const usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username";
  signUpForm.appendChild(usernameLabel);
}

function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("containerTab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("column");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
