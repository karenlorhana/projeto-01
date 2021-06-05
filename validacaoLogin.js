function validarLogin() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value == "" || password.value == "") {
    alert("E-mail ou senha não informados!");
    setTimeout(function () {
      window.location = "login.html";
    });
  } else {
    setTimeout(function () {
      window.location = "user.html";
    });
  }
}
