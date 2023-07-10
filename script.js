//simple email validation
function validateEmail(s) {
  var a = s.indexOf("@"),
    i = s.lastIndexOf(".");
  return a > 0 && i > a + 1 && i < s.length - 1;
}

const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const registerBtn = document.querySelector("#submit-btn");

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

registerBtn.onclick = () => {
  let isFirstName = false;
  let isLastName = false;
  let isEmail = false;
  let isPassword = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstName = true;
  }
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastName = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmail = true;
  }

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
  } else {
    passwordInput.classList.add("is-invalid");
    isPassword = true;
  }

  if (isFirstName && isLastName && isEmail && isPassword) {
    alert("Registered successfully");
  }
};
