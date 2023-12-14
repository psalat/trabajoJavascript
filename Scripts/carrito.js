
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
    document.getElementById('listaDeCompras').innerHTML =
                                    "<div class='renglonItemCarrito rcEnc'>" +
                                        "<div class=codigoProductoCarrito>Cód.</div>"+
                                        "<div class=descProductoCarrito>Descripción</div>"+
                                        "<div class=precioUnitProductoCarrito>$/un.</div>"+
                                        "<div class=cantidadProductoCarrito>Q</div>"+
                                        "<div class=subTotalProductoCarrito>SubT.</div>"+
                                        "<div class=eliminarUnidadCarrito></div>"+
                                        "<div class=eliminarItemCarrito></div>"+
                                    "</div>";


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


        fetch('https://psalat.github.io/json-ags/stockSimple.json')
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


        i++;
        
        
    });

    

}

function renderLineaCarrito(producto,i,q) {
    let linea = [];
    linea[0] = "<div class='renglonItemCarrito' id='ric"+ i +"' codigo='"+ producto.codigo +"'>" +
                "<div class=codigoProductoCarrito>"+
                    producto.codigo+
                "</div>"+
                "<div class=descProductoCarrito>"+
                    producto.tipo + " " + producto.marca + " " + producto.modelo +
                "</div>"+
                "<div class=precioUnitProductoCarrito>"+
                    "$"+producto.precio +
                "</div>"+
                "<div class=cantidadProductoCarrito>"+
                    q+
                "</div>"+
                "<div class=subTotalProductoCarrito id=st"+i+">"+
                    "$" + q * producto.precio +
                "</div>"+
                "<div class=eliminarUnidadCarrito onclick=EliminaUnaUnidad("+ producto.codigo +")>-1"+
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
    modificaImagenCarrito(0);
    modificaLayOut();
}

function compraCarrito() {

    if(localStorage.getItem('compra') != null){

        let modal = document.getElementById('modal');
        modal.innerHTML = '';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.paddingLeft = '20%';
        modal.style.paddingRight = '20%';
        //modal.innerHTML = document.getElementById('listaDeCompras').innerHTML;
        modal.removeEventListener('click', ocultaModal);

        let formulario = document.createElement('div');

        let btnCerrar = document.createElement('button');
        btnCerrar.innerText = "Cancelar";
        btnCerrar.className = 'inputForm btnCerrar';
        btnCerrar.onclick = ocultaModal;

        let btnCompra = document.createElement('button');
        btnCompra.innerText = "Comprar";
        btnCompra.className = 'inputForm btnCompra';
        btnCompra.onclick = comprarCarrito;

        formulario.appendChild(btnCerrar);


        formulario.innerHTML = '<div class="formularioTarjeta">'+
        '<div class="RForm">'+
            '<div class="campo">'+
                '<div class="label">Número de Tarjeta</div>'+
                '<div class="valor">'+
                    '<input class="inputForm numTarj" type="text" id="tarjeta">'+
                '</div>'+
            '</div>'+
            '<div class="campo">'+
                '<div class="label">Vencimiento (MM/YY)</div>'+
                '<div class="valor">'+
                    '<input class="inputForm venc" type="text" id="venc">'+
                '</div>'+
            '</div>'+
        '</div>'+

        '<div class="RForm">'+
            '<div class="campo">'+
                '<div class="label">CVV</div>'+
                '<div class="valor">'+
                    '<input class="inputForm venc" type="text" id="CVV">'+
                '</div>'+
            '</div>'+
            '<div class="campo">'+
                '<div class="label">Titular</div>'+
                '<div class="valor">'+
                    '<input class="inputForm" type="text" id="titular">'+
                '</div>'+
            '</div>'+
        '</div>'+

        '<div class="RForm">'+
            '<div class="campo">'+
                '<div class="label">DNI</div>'+
                '<div class="valor">'+
                    '<input class="inputForm DNI" type="text" id="dni">'+
                '</div>'+
            '</div>'+
            
        '</div>'+

    '</div>';

    formulario.appendChild(btnCompra);
    formulario.appendChild(btnCerrar);
    
    modal.appendChild(formulario);



    } else {
        Swal.fire({
            title: "No tenés ningún producto en el carrito",
            icon: "error"
          });
    }

    
}

function encuentraProductoPorCodigo(codigo) {
    let producto = stock.find((element)=>{
        return element.codigo == codigo;
    });

    return producto;
}

function comprarCarrito() {

    let tarjeta = document.getElementById('tarjeta').value;
    let venc = document.getElementById('venc').value;
    let cvv = document.getElementById('CVV').value;
    let titular = document.getElementById('titular').value;
    let dni = document.getElementById('dni').value;

    if (tarjeta != '' & venc != '' & cvv != '' & titular != '' & dni != ''){
        
        Swal.fire({
            title: "Espera mientras procesamos el pago",
            timer: 3000,
            timerProgressBar: false,
            didOpen: () => {
              Swal.showLoading();
            }
          })
          .then(()=>{

            Swal.fire({
                title: "¡Felicidades, realizaste la compra con éxito!",
                text: "Medio truchos los datos, pero bue... dejalo así 😁",
                icon: "success"
              });

              limpiaCarrito();
              ocultaModal();

          });


    } else {
        Swal.fire({
            title: "Debés completar todos los datos de la tarjeta",
            icon: "warning"
          });
    }

}