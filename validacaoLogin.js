function validarLogin() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value == "" || password.value == "") {
    alert("E-mail ou senha não informados!");
    setTimeout(function () {
      window.location = "http://127.0.0.1:5500/login.html";
    });
  } else {
    setTimeout(function () {
      window.location = "http://127.0.0.1:5500/user.html";
    });
  }
}
