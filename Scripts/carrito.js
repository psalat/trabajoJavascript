
if (localStorage.getItem('compra') != null){

    prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));

    resumenInicial = resumenDeCarrito(prodsAgregadosAlCarrito);


    renderCarritoCompleto(resumenInicial);

    modificaImagenCarrito(prodsAgregadosAlCarrito.length);
 

    totalCompra = Number(localStorage.getItem('totalCompra'));
    if (prodsAgregadosAlCarrito.length == 0) {
        document.getElementById('cantidad').innerHTML = '';
    } else {
        document.getElementById('cantidad').innerHTML = prodsAgregadosAlCarrito.length;
    }
    
}

document.getElementById('cerrarCarrito').addEventListener('click',()=>{

    modificaLayOut();

});

document.getElementById('limpiarCarrito').addEventListener('click',limpiaCarrito);

document.getElementById('comprarCarrito').addEventListener('click',compraCarrito);

function renderCarritoCompleto(objetoCarrito){
    let i = 0;
    let j = 0;
    document.getElementById('listaDeCompras').innerHTML = '';
    let codigosEnCompra = Object.keys(objetoCarrito);
    let cantidadesEnCompra = Object.values(objetoCarrito);
    let totalCompra = 0;
    let cantidadesAcumuladas = 0;

    if(codigosEnCompra.length == 0){
        limpiaCarrito();
        modificaImagenCarrito(0);
    }

    codigosEnCompra.forEach((codEnCo)=>{

        let canti = cantidadesEnCompra[i];


//////////////
        // let productoInicial = stock.find((element2)=>{
        //     return element2.codigo == codEnCo;
        // });

        // let linea = renderLineaCarrito(productoInicial,j,canti);
            
        //     totalCompra += Number(linea[1]);
        //     document.getElementById('listaDeCompras').innerHTML += linea[0];
        //     document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
        //     j++
////////////////


///////////////
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

            let linea = renderLineaCarrito(productoInicial,j,canti);
            
            totalCompra += Number(linea[1]);
            cantidadesAcumuladas += canti;
            document.getElementById('listaDeCompras').innerHTML += linea[0];
            document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
            document.getElementById('cantidad').innerHTML = cantidadesAcumuladas;
            modificaImagenCarrito(cantidadesAcumuladas);
            j++

        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
///////////////////////////


        i++;
        
        
        
    });

    

}

function renderLineaCarrito(producto,i,q) {
    let linea = [];
    linea[0] = "<div class='renglonItemCarrito' id='ric"+ i +"' codigo='"+ producto.codigo +"'>" +
                "<div class=dataProductoCarrito>"+
                    producto.codigo + " " + producto.tipo + " " + producto.marca + " " + producto.modelo + " $" + producto.precio +
                "</div>"+
                "<div class=dataProductoCarrito>"+
                    "Cantidad:" + q+
                "</div>"+
                "<div class=dataProductoCarrito id=st"+i+">"+
                    "subTotal: $" + q * producto.precio +
                "</div>"+
                "<div class=eliminarItemCarrito onclick=EliminaUnaUnidad("+ producto.codigo +")>-1"+
                "</div>"+
                "<div class=eliminarItemCarrito onclick=eliminaItemCarrito("+ producto.codigo +")>X"+
                "</div>"+
            "</div>";
        
    linea[1] = q * producto.precio;

    return linea;
}

function eliminaItemCarrito(prod){

    let compraEnStorage = JSON.parse(localStorage.getItem('compra'));

    let indiceAEliminar = compraEnStorage.indexOf(prod);

    while (indiceAEliminar != -1) {
        indiceAEliminar = compraEnStorage.indexOf(prod);
        if(indiceAEliminar != -1){
          compraEnStorage.splice(compraEnStorage.indexOf(prod),1);
        }
      }

    localStorage.setItem('compra',JSON.stringify(compraEnStorage));

    let nuevoCarrito = resumenDeCarrito(compraEnStorage);

    renderCarritoCompleto(nuevoCarrito);

}

function EliminaUnaUnidad(prod){
    let compraEnStorage = JSON.parse(localStorage.getItem('compra'));

    let indiceAEliminar = compraEnStorage.indexOf(prod);

    if(indiceAEliminar != -1){
    compraEnStorage.splice(compraEnStorage.indexOf(prod),1);
    console.log("carro con eliminacion "+compraEnStorage);
    } else {
    console.log("No se eliminó ningún elemento "+compraEnStorage);
    }

    localStorage.setItem('compra',JSON.stringify(compraEnStorage));

    let nuevoCarrito = resumenDeCarrito(compraEnStorage);

    renderCarritoCompleto(nuevoCarrito);
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












/*

let codigoAEliminar = 10080;
let indiceAEliminar = carro.indexOf(codigoAEliminar);


//Eliminación de una cantidad:

indiceAEliminar = carro.indexOf(codigoAEliminar);
if(indiceAEliminar != -1){
  carro.splice(carro.indexOf(codigoAEliminar),1);
  console.log("carro con eliminacion "+carro);
} else {
  console.log("No se eliminó ningún elemento "+carro);
}


//Eliminación de todos los ítems
while (indiceAEliminar != -1) {
  indiceAEliminar = carro.indexOf(codigoAEliminar);
  if(indiceAEliminar != -1){
    carro.splice(carro.indexOf(codigoAEliminar),1);
  }
}

*/