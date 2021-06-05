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

function Init() {
  var myTextbox = document.getElementById("submit-login");
  myTextbox.addEventListener("keypress", checkName, false);
}

function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      alert(
        "Please use lowercase letters only." +
          "\n" +
          "charCode: " +
          charCode +
          "\n"
      );
    }
  }
}
