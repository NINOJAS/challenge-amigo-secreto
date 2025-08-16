let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("nombreAmigo").value.trim();
  if (nombre === "") {
     Swal.fire({
        title: "Campo vacío",
        text: "Por favor, ingrese un nombre",
        icon: "warning"
    });
    return;
  }
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  
    amigos.push(nombre);
  document.getElementById("nombreAmigo").value = "";
  mostrarLista();
    Swal.fire({
    title: `${nombre}`,
    text: "fue agregad@  a la lista",
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  });
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
  let eliminado = amigos[indice];
  amigos.splice(indice, 1);
  mostrarLista();
    Swal.fire({
    title: `${eliminado}`,
    text: "fue eliminad@ de la lista",
    icon: "info",
    timer: 1500,
    showConfirmButton: false
  });
}
function sortearAmigo() {
  if (amigos.length === 0) {
    Swal.fire({
      title: "Oops...",
      text: "No hay amigos para sortear",
      icon: "warning"
    });
    return;
  }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
     Swal.fire({
    title: "¡Tú Amigo secreto!",
    html: `El amigo secreto es: <strong>${amigoSorteado}</strong>`,
    icon: "success"
  });
} 

function reiniciarJuego() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}