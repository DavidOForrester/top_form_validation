const form = document.querySelector("form");

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector("#zip-code + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const passwordConfirmation = document.getElementById("password-confirmation");
const passwordConfirmationError = document.querySelector("#password-confirmation + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showCountryError();
  }
});

zipCode.addEventListener("input", (event) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
    zipCodeError.className = "error";
  } else {
    showZipCodeError();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showPasswordError();
  }
});

passwordConfirmation.addEventListener("input", (event) => {
  if (passwordConfirmation.validity.valid) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.className = "error";
  } else {
    showPasswordConfirmationError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  } 
  if (!country.validity.valid) {
    showCountryError();
    event.preventDefault();
  } 
  if (!zipCode.validity.valid) {
    showZipCodeError();
    event.preventDefault();
  } 
  if (!password.validity.valid) {
    showPasswordError();
    event.preventDefault();
  } 
  if (!passwordConfirmation.validity.valid) {
    showPasswordConfirmationError();
    event.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } 

  emailError.className = "error active";
}
function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a Country.";
  } 

  countryError.className = "error active";
}
function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a Zip Code.";
  } else if (zipCode.validity.tooShort) {
    zipCodeError.textContent = "Zip Code is too short"
  } 

  zipCodeError.className = "error active";
}
function showPasswordError() {
   if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a Password.";
  } 

  passwordError.className = "error active";
}
function showPasswordConfirmationError() {
  if (passwordConfirmation.validity.valueMissing) {
    passwordConfirmationError.textContent = "You need to enter a Password Confirmation.";
  }

  passwordConfirmationError.className = "error active";
}
