var openLoginRight = document.querySelector(".h1");
var loginWrapper = document.querySelector(".login-wrapper");

openLoginRight.addEventListener("click", function () {
  loginWrapper.classList.toggle("open");
});

function btnlogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "user" && password === "user") {
    window.location.href = "/user.html";
  } else if (username === "admin" && password === "admin") {
    window.location.href = "/admin.html";
  } else {
    alert("Login Fail Please try again");
  }
}
