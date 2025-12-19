// declarar un arreglo
var frutas=["UVA","PERA","MANZANA","NARANJA","KIWI"];

// mostrar el arreglo en consola
// console.log(frutas[0]); // UVA

frutas.push("MANGO"); // agregar un elemento al final del arreglo
frutas.unshift("CEREZA"); // agregar un elemento al inicio del arreglo
frutas.pop(); // eliminar el ultimo elemento del arreglo
frutas.shift(); // eliminar el primer elemento del arreglo
frutas.length;
let tamanio_arreglo=frutas.length; // obtener el tamaño del arreglo
console.log(`Tamaño del arreglo: ${tamanio_arreglo}`);
let frutas_forEach=frutas.forEach(function(fruta){
    return fruta.toUpperCase();
});
console.log("=== USO DE MAP ===");
var frutas_map=frutas.map(function(fruta){
    return fruta.toLowerCase();
});

console.log(frutas_forEach);
console.log("=== RESULTADO DE MAP ===");
console.log(typeof(frutas_map));