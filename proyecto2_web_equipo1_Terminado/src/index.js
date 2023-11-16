import Producto from "./Producto.js";
let productos = [];
let nombresDeProductos = [];
let productosMasBaratos = [];



const listaProductos = document.querySelector("tbody");

//const listaProductos = document.getElementById("cuerpoTabla");
document.getElementById("saveProduct").onclick = () => {

    alert("producto agregado"); // aviso de que se agrego el producto.

    let nuevoProducto = new Producto(
        document.getElementById("nombreP").value,
        Number(document.getElementById("precioP").value),
        document.getElementById("sucursal").value);
    productos.push(nuevoProducto);

    agregarNombresSinRepetir(nuevoProducto.nombreP);
    console.log("sin repetir" + nombresDeProductos);

    //luego de guardar producto, se reinician los campos.
    document.getElementById("nombreP").value = "";
    document.getElementById("precioP").value = "";
    document.getElementById("sucursal").value = "";

    console.log(productos.length);
    console.log(productos);

    let tr = document.createElement("tr");
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
//Productos Mas Baratos
document.getElementById("productoBarato").onclick = () => {
    if (productos.length === 0) {
        alert("No hay productos para comparar.");
        return;
    }

    const listaProductos = document.getElementById("productosMasBarato");
    listaProductos.innerHTML = ""; // Limpiar la lista antes de mostrar los productos

    //productosMasBaratos = productos.slice();
    listaMasBaratos();

    for (const producto of productosMasBaratos) {
        const li = document.createElement("li");

        li.textContent = `Producto: ${producto.nombreP}, Precio: ${producto.precioP}, Sucursal: ${producto.sucursal}`;
        listaProductos.appendChild(li);
    }

}


//agrega los nombres de los productos sin repetidos al array nombresDeProductos 

const agregarNombresSinRepetir = (nombre) => {
    let repetido = false;
    if (nombresDeProductos.length === 0) {
        nombresDeProductos.push(nombre);
    } else {
        if (nombresDeProductos.length === 1 && nombresDeProductos[0].toLowerCase() !== nombre.toLowerCase()) {
            nombresDeProductos.push(nombre);
        } else {
            console.log("llegue")

            for (let i = 0; i < nombresDeProductos.length && (repetido === false); i++) {

                if (nombresDeProductos[i].toLowerCase() === nombre.toLowerCase()) {

                    repetido = true;
                } else {
                    repetido = false;
                }
            }
            if (repetido === false) {
                nombresDeProductos.push(nombre);
            }
        }

    }

}

//obtiene una lista de los precios mas baratos

const listaMasBaratos = () => {
    let filtrarRepetidos=[];
    let minimo=Infinity;
    
   
    //recorre el arreglo que tiene los nombres de los productos sin repetidos
    for (let i = 0; i < nombresDeProductos.length; i++) {
       
        filtrarRepetidos = obtenerRepetidos(nombresDeProductos[i]).slice();
        
        filtrarRepetidos.sort((a, b) => {
            console.log("llegamos2?");
            if (b.precioP === a.precioP) {
                return 0
            }
            if (a.precioP < b.precioP) {
                return -1
            }
            return 1
        });
        console.log(filtrarRepetidos);
       // minimo = filtrarRepetidos[0].precioP;
       
        
    filtrarRepetidos.filter(function (element) {
        if(element.precioP <= minimo){
            minimo=element.precioP;
            productosMasBaratos.push(element)
            return element;
           
        }
        
    });
    

    };
}

//obtiene una lista de productos de una mismo nombre
function obtenerRepetidos(producto) {
    let filtrarRepetidos = productos.filter(function (element) {
        return element.nombreP.toUpperCase() === producto.toUpperCase();
    });
    return filtrarRepetidos;
}
