import producto from "./Producto.js";
let productos = [];
document.getElementById("GP").onclick = () =>{

    let productoUno = new producto (
        Document.getElementById("producto").value,
        Number(document.getElementById("precio").value),
        Document.getElementById("sucursal").value)


    guardarProducto(productoUno);

    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("sucursal").value = "";

    const almacenProductos = [];

    almacenProductos.push(producto01);
    almacenProductos.push(producto02);
    almacenProductos.push(producto03);
    almacenProductos.push(producto04);
    almacenProductos.push(producto05);

    document.getElementById("np01").innerHTML = almacenProductos[0].producto;
    document.getElementById("pr01").innerHTML = almacenProductos[0].precio;
    document.getElementById("su01").innerHTML = almacenProductos[0].sucursal;

    document.getElementById("np01").innerHTML = almacenProductos[1].producto;
    document.getElementById("pr01").innerHTML = almacenProductos[1].precio;
    document.getElementById("su01").innerHTML = almacenProductos[1].sucursal;

    document.getElementById("np01").innerHTML = almacenProductos[2].producto;
    document.getElementById("pr01").innerHTML = almacenProductos[2].precio;
    document.getElementById("su01").innerHTML = almacenProductos[2].sucursal;
    
    document.getElementById("np01").innerHTML = almacenProductos[3].producto;
    document.getElementById("pr01").innerHTML = almacenProductos[3].precio;
    document.getElementById("su01").innerHTML = almacenProductos[3].sucursal;

    document.getElementById("np01").innerHTML = almacenProductos[4].producto;
    document.getElementById("pr01").innerHTML = almacenProductos[4].precio;
    document.getElementById("su01").innerHTML = almacenProductos[4].sucursal;


}

