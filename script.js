let form = document.getElementById("form");
let submitButton = form.querySelector("button");
let emailInput = form.querySelector("input");
let errorSpan = form.querySelector("span");
let successCard = document.getElementById("success-card");
let mainCard = document.getElementById("main-card");
let emailValue = successCard.querySelector("span");
let dismissButton = successCard.querySelector("button");

function showError() {
  errorSpan.classList.remove("hidden");
  errorSpan.classList.add("error-text-show");
  emailInput.classList.add("error-input-show");
}

function clearError() {
  errorSpan.classList.add("hidden");
  errorSpan.classList.remove("error-text-show");
  emailInput.classList.remove("error-input-show");
}

function showSuccess(email) {
   
  mainCard.classList.add("hidden");
  form.reset();

  successCard.classList.remove("hidden");

  emailValue.style.display = "inline";
  emailValue.textContent = email;

  
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError();
    return false;
  } else {
    clearError();
    return true;
  }
}

function handleChangeInput(e) {
  const email = e.target.value.trim();
  validateEmail(email);
}

function handleSubmission(e) {
  e.preventDefault(e);

  const email = new FormData(e.target).get("email").trim();

  if (validateEmail(email)) {
    showSuccess(email);
  }
}

function handleDismission() {
  mainCard.classList.remove("hidden");
  successCard.classList.add("hidden");
}

function init() {
  emailInput.addEventListener("change", handleChangeInput);
  dismissButton.addEventListener("click", handleDismission);
  form.addEventListener("submit", handleSubmission);
}

init();
