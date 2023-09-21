// Array para almacenar los productos
const productos = [];

// Función para guardar producto
function guardarProducto() {
    const producto = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const sucursal = document.getElementById("sucursal").value;

    // Validar que el precio sea un número válido(In.)
    if (!isNaN(precio)) {
        const nuevoProducto = {
            producto,
            precio,
            sucursal,
        };
        productos.push(nuevoProducto);

        
        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("sucursal").value = "";

        alert("Producto guardado exitosamente.");
    } else {
        alert("Por favor, ingrese un precio válido.");
    }
}

// Función para poder listar los productos
function listarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = ""; // Limpiar la lista antes de mostrar los productos

    for (const producto of productos) {
        const li = document.createElement("li");
        li.textContent = `Producto: ${producto.producto}, Precio: ${producto.precio}, Sucursal: ${producto.sucursal}`;
        listaProductos.appendChild(li);
    }
}

