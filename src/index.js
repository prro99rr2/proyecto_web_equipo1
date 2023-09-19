import Producto from "./producto.js";
let productos = [];


const listaProductos = document.querySelector("tbody");


document.getElementById("saveProduct").onclick = () => {
    let nuevoProducto = new Producto(
        document.getElementById("nombreP").value,
        Number(document.getElementById("precio").value),
        document.getElementById("comercio").value); 
    productos.push(nuevoProducto);
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
    suc.textContent = nuevoProducto.sucursalP;
    listaProductos.insertAdjacentElement("beforeend", suc);

};