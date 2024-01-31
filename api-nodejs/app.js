const express = require("express");
var cors = require('cors')

const app = express();

app.use(cors())

const PORT = 3000;

// Una lista de productos
const productos = [
  { id: 1, nombre: "Producto 1", precio: 1000 },
  { id: 2, nombre: "Producto 2", precio: 2000 },
  { id: 3, nombre: "Producto 3", precio: 3000 },
];


// // Crear
// app.post("/admin/productos", (req, res) => {});

// // Actualizar
// app.put("/admin/productos/:id", (req, res) => {});

// // Obtener uno
// app.get("/admin/productos/:id", (req, res) => {});

// Eliminar
// app.delete("/admin/productos/:id", (req, res) => {});

// Obtener todos
app.get("/admin/productos", (req, res) => {
    res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
