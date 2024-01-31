function descargarProductos() {
  console.log("Descargar productos");

  fetch("http://localhost:3000/admin/productos")
    .then((response) => response.json())
    .then((data) => {
      mostrarProductos(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarProductos(productos) {
  console.log("Mostrar productos");

  var contenido = "";

  for (var i = 0; i < productos.length; i++) {
    contenido += `<tr>
            <td>${productos[i].id}</td>
            <td>${productos[i].nombre}</td>
            <td>${productos[i].precio}</td>
            <td><a href="/edit.html?id=${productos[i].id}" target="_blank">Editar</a></td>
        </tr>`;
  }

  document.getElementById("tabla-productos").innerHTML = contenido;
}
