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

firstNameInput.onkeyup = (event) => {
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
  let isFirstNameOk = true;
  let isLastNameOk = true;
  let isEmailOk = true;
  let isPasswordOk = true;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = false;
  }
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
    lastNameInput.classList.add("is-valid");
    isLastNameOk = false;
  }

  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.add("is-valid");
    isEmailOk = false;
  }

  if (passwordInput.value.length <= 6) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.add("is-invalid");
    isPasswordOk = false;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully");
  }
};
