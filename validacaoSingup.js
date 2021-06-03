function validarSingup() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (name.value == " " || email.value == " " || password.value == " ") {
    alert("Os dados não foram preenchidos corretamente!");
    setTimeout(function () {
      window.location = "http://127.0.0.1:5500/singup.html";
    });
  } else {
    setTimeout(function () {
      window.location = "http://127.0.0.1:5500/index.html";
    });
  }
}
