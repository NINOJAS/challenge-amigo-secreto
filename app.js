let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("nombreAmigo").value.trim();
  if (nombre === "") {
    alert("por favor, ingrese un nombre");
    return;
  }
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