let form = document.querySelector(".form");
let user = document.querySelector("#username");
let email = document.querySelector("#email");
let pwd = document.querySelector("#pwd");
let cpwd = document.querySelector("#cpwd");
let btn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userVal = user.value.trim();
  const emailVal = email.value.trim();
  const pwdVal = pwd.value.trim();
  const cPwdVal = cpwd.value.trim();

  if (userVal === "") {
    setError(user, "Username required");
  } else {
    setSuccess(user);
  }
  // ########################################## //
  if (emailVal === "") {
    setError(email, "Email should be required");
  } else if (!validEmail(emailVal)) {
    setError(email, 'Please enter a valid email "@"');
  } else {
    setSuccess(email);
  }
  if (pwdVal === "") {
    setError(pwd, "Password required");
  } else if (pwdVal.length < 8) {
    setError(pwd, "Should be minimum 8 character");
  } else {
    setSuccess(pwd);
  }

  if (cPwdVal === "") {
    setError(cpwd, "Confirm password required");
  } else if (pwdVal !== cPwdVal) {
    setError(cpwd, "Confirm password and  password not match");
  } else {
    setSuccess(cpwd);
  }
}
function setError(element, message) {
  const inputGroup = element.parentElement;
  const err = inputGroup.querySelector(".error");
  err.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const err = inputGroup.querySelector(".error");
  err.innerText = "";
  inputGroup.classList.remove("error");
  inputGroup.classList.add("success");
}
function validEmail(element) {
  const emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  return emailReg.test(element);
}
function validPssword(element) {
  const pwdReg =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return pwdReg.test(element);
}
