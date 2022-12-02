const nombre = document.getElementById("nombre");
const user = document.getElementById("user");
const contrasena = document.getElementById("contrasena");
const contrasenaR = document.getElementById("contrasenaR");

const msgNombre = document.getElementById("msgNombre");
const msgUser = document.getElementById("msgUser");
const msgPwd = document.getElementById("msgPwd");
const msgPwdR = document.getElementById("msgPwdR");

function validar() {
  let vUser = user.value;
  msgUser.innerText = "";
  let RegExpUser = /([a-zA-Z0-9._]{4,16}\S)/;

  let vNombre = nombre.value;
  msgNombre.innerText = "";
  let RegExpNombre = /^[A-Za-z]+([\s]?[A-Za-z])*$/;

  let vPwd = contrasena.value;
  msgPwd.innerText = "";
  let RegExpPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  let vPwdR = contrasenaR.value;
  msgPwdR.innerText = "";
  let RegExpPwdR = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (RegExpUser.test(vUser)) {
    document.getElementById("user").style.borderColor = "blue";
  } else {
    msgUser.innerText =
      "El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guión bajo.";
    document.getElementById("user").style.borderColor = "red";
  }
  if (RegExpNombre.test(vNombre)) {
    document.getElementById("nombre").style.borderColor = "blue";
  } else {
    msgNombre.innerText = "Ingrese su Nombre y Apellidos.";
    document.getElementById("nombre").style.borderColor = "red";
  }
  if (RegExpPwd.test(vPwd)) {
    document.getElementById("contrasena").style.borderColor = "blue";
  } else {
    msgPwd.innerText =
      "La contraseña tiene que ser minimo de 8 dígitos y debe tener como minimo una Mayuscula y un número.";
    document.getElementById("contrasena").style.borderColor = "red";
  }
  if (vPwdR === "") {
    msgPwdR.innerText = "Ambas contraseñas deben ser iguales.";
    document.getElementById("contrasenaR").style.borderColor = "red";
  } else if (vPwdR !== vPwd) {
    msgPwdR.innerText = "Ambas contraseñas deben ser iguales.";
    document.getElementById("contrasenaR").style.borderColor = "red";
  } else {
    document.getElementById("contrasenaR").style.borderColor = "blue";
  }
}
