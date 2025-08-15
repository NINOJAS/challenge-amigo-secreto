let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("nombreAmigo").value.trim();
  if (nombre === "") {
    alert("por favor, ingrese un nombre");
    return;
  }
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  
    amigos.push(nombre);
  document.getElementById("nombreAmigo").value = "";
  mostrarLista();
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(function (amigo, indice) {
    let li = document.createElement("li");
    li.textContent = amigo + "";
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.onclick = function () {
      eliminarAmigo(indice);
    };
    li.appendChild(botonEliminar);  
    lista.appendChild(li);
  });
}
function eliminarAmigo(indice) {
  amigos.splice(indice, 1);
  mostrarLista();
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
} 

function reiniciarJuego() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}