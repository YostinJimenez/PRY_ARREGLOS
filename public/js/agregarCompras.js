let carrito = [];
var input = document.getElementById('input_producto');
var lista_carro = document.getElementById('lista_carrito');
var botonAgregar = document.getElementById('btn_agregar');

botonAgregar.addEventListener('click', function () {
    agregarProducto();
});

lista_carro.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-eliminar')) {
        var indice = e.target.dataset.indice;
        eliminarProducto(indice);
    }
});

function agregarProducto() {
    const texto = input.value;
    if (texto === '') return;
    carrito.push(texto);
    input.value = '';

    actualizarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    lista_carro.innerHTML = '';
    carrito.forEach((producto, index) => {
        var li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        var span = document.createElement('span');
        span.textContent = producto;
        var boton = document.createElement('button');
        boton.className = 'btn btn-sm btn-outline-danger btn-eliminar';
        boton.textContent = 'Eliminar';
        boton.dataset.indice = index;

        li.appendChild(span);
        li.appendChild(boton);
        lista_carro.appendChild(li);
    });
}