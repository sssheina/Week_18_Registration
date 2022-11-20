function check() {
  let login = document.getElementById("login");
  let userName = document.getElementById("userName");
  let password = document.getElementById("password");
  let confPassword = document.getElementById("confPassword");
  let sexCheckbox = document.getElementById("sexCheckbox");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let textarea = document.getElementById("textarea");
  let postalCode = document.getElementById("postalCode");
  let agreedCheckbox = document.getElementById("agreedCheckbox");
  let errorMessage = document.getElementById('errorMessage');

  errorMessage.textContent = '';

  if (login.value == '') {
    errorMessage.textContent= "Login field is empty";
  }

  else if (userName.value == '') {
    errorMessage.textContent= "Name field is empty";
  }

  else if (password.value == '') {
    errorMessage.textContent= "Password field is empty";
  }

  else if (confPassword.value == '') {
    errorMessage.textContent= "Confirm password field is empty";
  }

  else if (password.value != confPassword.value) {
    errorMessage.textContent= "Passwords don't match";
  }

  else if (sexCheckbox.value == "") {
    errorMessage.textContent= "Sex field is empty";
  }

  else if (email.value == '') {
    errorMessage.textContent = "Email field is empty";
  }

  else if (email.value.indexOf("@") < 0) {
    errorMessage.textContent = "Email format is not valid";
  }

  else if (phone.value == '') {
    errorMessage.textContent = "Phone field is empty";
  }

  else if (textarea.value == '') {
    errorMessage.textContent= "Address field is empty";
  }

  else if (postalCode.value == '') {
    errorMessage.textContent= "Postal Code field is empty";
  }

  else if (!agreedCheckbox.checked) {
    errorMessage.textContent= "You should agree with terms and conditions";
  }

  else  {
    alert(`Welcome, ${userName.value}!`);
  }
  
}