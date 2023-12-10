
if (localStorage.getItem('compra') != null){

    prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));










    resumenInicial = resumenDeCarrito(prodsAgregadosAlCarrito);

    // console.log(Object.keys(resumenInicial));
    // console.log(Object.values(resumenInicial));

    renderCarritoCompleto(resumenInicial);
 


/*
    let j = 0;

    let codigosEnCompra = Object.keys(resumenInicial);
    let cantidadesEnCompra = Object.values(resumenInicial);

    codigosEnCompra.forEach((codEnCo)=>{
        console.log(codEnCo + ":" + cantidadesEnCompra[j]);
        let canti = cantidadesEnCompra[j];

        fetch('https://psalat.github.io/json-ags/stock.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Hubo un error en el response');
            }
            return response.json();
        })
        .then(data => {
            stock = data;

            let productoInicial = stock.find((element2)=>{
                return element2.codigo == codEnCo;
            });

            document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoInicial,j,canti);

            //en productosIniciales tengo todos los datos de los productos
            //en cantidadesEnCompra tengo las cantidades
            //RENDERIZAR CON ESTOS DATOS

        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });

        


        j++
    });
    
*/










/*

    let i = 0;

    prodsAgregadosAlCarrito.forEach(element => {

        fetch('https://psalat.github.io/json-ags/stock.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Hubo un error en el response');
            }
            return response.json();
        })
        .then(data => {
            stock = data;

            let productoEncontradoAlInicio = stock.find((element2)=>{
                return element2.codigo == element;
            });
              
            //document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoEncontradoAlInicio,i,2);
            
            


        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });

        i++;
        
    });


    */

    totalCompra = Number(localStorage.getItem('totalCompra'));
    if (prodsAgregadosAlCarrito.length == 0) {
        document.getElementById('cantidad').innerHTML = '';
    } else {
        document.getElementById('cantidad').innerHTML = prodsAgregadosAlCarrito.length;
    }
    
    document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
}

document.getElementById('cerrarCarrito').addEventListener('click',()=>{
    let listaCarrito = document.getElementById('listaCarrito');

    listaCarrito.style.display = 'none';
});

document.getElementById('limpiarCarrito').addEventListener('click',limpiaCarrito);

document.getElementById('comprarCarrito').addEventListener('click',compraCarrito);

function renderCarritoCompleto(objetoCarrito){
    
    let j = 0;

    let codigosEnCompra = Object.keys(objetoCarrito);
    let cantidadesEnCompra = Object.values(objetoCarrito);

    codigosEnCompra.forEach((codEnCo)=>{

        let canti = cantidadesEnCompra[j];

        fetch('https://psalat.github.io/json-ags/stock.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Hubo un error en el response');
            }
            return response.json();
        })
        .then(data => {

            let productoInicial = data.find((element2)=>{
                return element2.codigo == codEnCo;
            });

            
            document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoInicial,j,canti);
            

            

            //en productosIniciales tengo todos los datos de los productos
            //en cantidadesEnCompra tengo las cantidades
            //RENDERIZAR CON ESTOS DATOS


        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });

        
        j++
        
    });

    

}


function renderLineaCarrito(producto,i,q) {

    return "<div class='renglonItemCarrito' id='ric"+ i +"' codigo='"+ producto.codigo +"'>" +
                "<div class=dataProductoCarrito>"+
                    producto.codigo + " " + producto.tipo + " " + producto.marca + " " + producto.modelo + " $" + producto.precio +
                "</div>"+
                "<div class=dataProductoCarrito>"+
                    "Cantidad:" + q+
                "</div>"+
                "<div class=dataProductoCarrito>"+
                    "subTotal: $" + q * producto.precio +
                "</div>"+
                "<div class=eliminarItemCarrito onclick=eliminaItemCarrito("+ i+","+ producto.codigo +")>X"+
                "</div>"+
            "</div>";
}

function eliminaItemCarrito(i,prod){

    let productoAEliminar = encuentraProductoPorCodigo(prod);

    let compraEnStorage = JSON.parse(localStorage.getItem('compra'));

    compraEnStorage.splice(i,1);

    localStorage.setItem('compra',JSON.stringify(compraEnStorage));


    document.getElementById('listaDeCompras').innerHTML = '';

    let j = 0;

    compraEnStorage.map((element)=>{

        let productoARenderizar = encuentraProductoPorCodigo(element);

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

    if(totalCompra == 0){
        limpiaCarrito();
    }

}

function limpiaCarrito() {
    localStorage.removeItem('compra');
    localStorage.removeItem('totalCompra');
    document.getElementById('listaDeCompras').innerHTML = '';
    document.getElementById('cantidad').innerHTML = '';
    document.getElementById('totalCompra').innerHTML = '';
    prodsAgregadosAlCarrito = [];
    totalCompra = 0;
}

function compraCarrito() {

    if(localStorage.getItem('compra') != null){
        let compraFinal = JSON.parse(localStorage.getItem('compra'));

        let listaFinal = '';

        compraFinal.map((codigo)=>{
            listaFinal += `${encuentraProductoPorCodigo(codigo).codigo} - ${encuentraProductoPorCodigo(codigo).tipo} ${encuentraProductoPorCodigo(codigo).marca} ${encuentraProductoPorCodigo(codigo).modelo} \n`;
        });
        alert(`Felicidades compraste:\n${listaFinal}\nEl total es de $${totalCompra}`);


        limpiaCarrito();
    } else {
        alert('No tenés ningún ítem en el carrito');
    }
    
}

function encuentraProductoPorCodigo(codigo) {
    let producto = stock.find((element)=>{
        return element.codigo == codigo;
    });

    return producto;
}


function renderCarritoConCatidades(objetoProductos) {
    console.log(objetoProductos);

}