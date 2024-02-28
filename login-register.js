function register() {
  var username_ = document.querySelector("#username-r");
  var password_ = document.querySelector("#password-r");
  var full_name_ = document.querySelector("#full-name-r");
  localStorage.setItem("new_user", JSON.stringify({name: full_name_.value, username: username_.value, password: password_.value}))
  window.location.href = "employee-form.html";
}

function login() {
  var username_ = document.querySelector("#username");
  var password_ = document.querySelector("#password");

}