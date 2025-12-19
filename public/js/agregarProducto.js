// console.log('agregar producto js ok');

var btn_agregar = document.getElementById('btn_agregar');
var btn_limpiar_tabla = document.getElementById('btn_limpiar_tabla');
var nombre_producto = document.getElementById('txt_nombre_producto');
var lista_producto = document.getElementById('lista_productos');
var lista_producto_mayuscula = document.getElementById('lista_productos_mayuscula');
var arreglos_productos = [];

btn_agregar.addEventListener('click', function (event) {
    var elementoLI = (nombre_producto) => {
        var elementoLI = document.createElement('li');
        elementoLI.classList.add('list-group-item');
        elementoLI.textContent = nombre_producto;
        return elementoLI;
    };
    // if (nombre_producto.value != '') {
    if (nombre_producto != '') {
        // elementoLI se agregara el nombre de producto
        lista_producto.appendChild(elementoLI(nombre_producto.value));
        // elementoLI se agregara el nombre de producto en mayusculas
        lista_producto_mayuscula.appendChild(elementoLI(nombre_producto.value.toUpperCase()));
        arreglos_productos.push(nombre_producto.value);
        nombre_producto.value = '';

    }
    else {
        console.log("POR FAVOR INGRESE UN PRODUCTO VALIDO!")
    }

    console.log(arreglos_productos);
    var porductos_mayuculas = arreglos_productos.map(function (producto) {
        return producto.toUpperCase();
    });

    console.log(porductos_mayuculas);

});

document.getElementById("btn_limpiar_tabla").addEventListener("click", function (e) {
    nombre_producto.value = "";
    lista_producto.innerHTML = "";
    lista_producto_mayuscula.innerHTML = "";
    arreglos_productos = [];
});



