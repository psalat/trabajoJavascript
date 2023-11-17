if (localStorage.getItem('compra') != null){

    prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));
    
    let i = 0;

    prodsAgregadosAlCarrito.forEach(element => {

        let productoEncontradoAlInicio = stock.find((element2)=>{
            return element2.codigo == element;
        });
          
        document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoEncontradoAlInicio,i);
        
        i++;
    });

    totalCompra = Number(localStorage.getItem('totalCompra'));
    if (prodsAgregadosAlCarrito.length == 0) {
        document.getElementById('cantidad').innerHTML = '';
    } else {
        document.getElementById('cantidad').innerHTML = i;
    }
    
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


function renderLineaCarrito(producto,i) {
    //let prod = JSON.stringify(producto);
    return "<div class='renglonItemCarrito' id='ric"+ i +"' codigo='"+ producto.codigo +"'>" +
                "<div class=dataProductoCarrito>"+
                    producto.codigo + " " + producto.tipo + " " + producto.marca + " " + producto.modelo + " $" + producto.precio +
                "</div>"+
                "<div class=eliminarItemCarrito onclick=eliminaItemCarrito("+ i+","+ producto.codigo +")>X"+
                "</div>"+
            "</div>";
}


function eliminaItemCarrito(i,prod){

    let productoAEliminar = stock.find((element)=>{
        return element.codigo == prod;
    });

    let compraEnStorage = JSON.parse(localStorage.getItem('compra'));

    compraEnStorage.splice(i,1);

    localStorage.setItem('compra',JSON.stringify(compraEnStorage));


    document.getElementById('listaDeCompras').innerHTML = '';

    let j = 0;

    compraEnStorage.map((element)=>{

        let productoARenderizar = stock.find((element2)=>{
            return element2.codigo == element;
        });

        document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoARenderizar,j);
        j++
    });

    totalCompra = totalCompra - Number(productoAEliminar.precio);
    
    localStorage.setItem('totalCompra',totalCompra);

    let nuevaCantidadEnCarrito = Number(document.getElementById('cantidad').innerHTML) - 1;

    if(nuevaCantidadEnCarrito == 0){
        document.getElementById('cantidad').innerHTML = '';
    } else {
        document.getElementById('cantidad').innerHTML = nuevaCantidadEnCarrito;
    }

    document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;

}