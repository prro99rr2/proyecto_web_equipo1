import Producto from "./Producto.js";
let productos = [];


const listaProductos = document.querySelector("tbody");

//const listaProductos = document.getElementById("cuerpoTabla");
document.getElementById("saveProduct").onclick = () => {
    
    alert("producto agregado"); // aviso de que se agrego el producto.
    
    let nuevoProducto = new Producto(
        document.getElementById("nombreP").value,
        Number(document.getElementById("precioP").value),
        document.getElementById("sucursal").value); 
    productos.push(nuevoProducto);
    
    //luego de guardar producto, se reinician los campos.
    document.getElementById("nombreP").value="";
    document.getElementById("precioP").value="";
    document.getElementById("sucursal").value="";

    console.log(productos.length);
    console.log(productos);
    
    let tr=document.createElement("tr");
    //el metodo appendChild permite agregar un elemento 
    listaProductos.appendChild(tr);
    
    let nomP = document.createElement("td");
    nomP.textContent = nuevoProducto.nombreP;
    
    listaProductos.insertAdjacentElement("beforeend", nomP);

    let preP = document.createElement("td");
    preP.textContent = nuevoProducto.precioP;
    listaProductos.insertAdjacentElement("beforeend", preP);

    let suc = document.createElement("td");
    suc.textContent = nuevoProducto.sucursal;
    listaProductos.insertAdjacentElement("beforeend", suc);

    
}

//const productoMenor = document.querySelector("rbody");
   
document.getElementById("productoBarato").onclick = () =>{
    if (productos.length === 0) {
        alert("No hay productos para comparar.");
        return;
    }

    let productoBarato = productos[0]; // Inicializamos con el primer producto (0)
    for (const producto of productos) {
        if (producto.precioP < productoBarato.precioP) {
            productoBarato = producto;
        }
    }

    document.getElementById("productosMasBarato").textContent = `Producto más barato: ${productoBarato.nombreP}, Precio: ${productoBarato.precioP}, Sucursal: ${productoBarato.sucursal}`;

}
