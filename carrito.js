if (localStorage.getItem('compra') != null){

    prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));
    console.log(localStorage.getItem('compra'));
    console.log(localStorage.getItem('totalCompra'));
    let i = 0;

    prodsAgregadosAlCarrito.forEach(element => {
        
        let productoEncontradoAlInicio = stock.find(producto => producto.codigo == element);
        console.log(productoEncontradoAlInicio);

        document.getElementById('listaDeCompras').innerHTML += productoEncontradoAlInicio.codigo + " " + productoEncontradoAlInicio.tipo + " " + productoEncontradoAlInicio.marca + " " + productoEncontradoAlInicio.modelo + " $" + productoEncontradoAlInicio.precio + "<br>";

        i++;
    });

    totalCompra = Number(localStorage.getItem('totalCompra'));
    document.getElementById('cantidad').innerHTML = i;
    document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
}

document.getElementById('cerrarCarrito').addEventListener('click',()=>{
    let listaCarrito = document.getElementById('listaCarrito');

    listaCarrito.style.display = 'none';
});


document.getElementById('limpiarCarrito').addEventListener('click',()=>{
    localStorage.removeItem('compra');
    localStorage.removeItem('totalCompra');
    document.getElementById('listaDeCompras').innerHTML = '';
    document.getElementById('cantidad').innerHTML = '';
    document.getElementById('totalCompra').innerHTML = '';
    prodsAgregadosAlCarrito = [];
    totalCompra = 0;

});