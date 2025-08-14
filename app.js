let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("nombreAmigo").value.trim();
  if (nombre === "") {
    alert("por favor, ingrese un nombre");
    return;
  }
  