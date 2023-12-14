let marcaElegida = '';

let modeloElegido = '';

let prodsAgregadosAlCarrito = [];

let totalCompra = 0;


document.getElementById('searcher').addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        buscaMarca();
    }
});

document.getElementById('btnSearcher').addEventListener("click", ()=> {
    buscaMarca();
});

document.getElementById('modelSelect').addEventListener("change", ()=> {
    
    document.getElementById('lista').innerHTML = '';
    
    let modeloSeleccionado = document.getElementById('modelSelect').value;

    fetch('https://psalat.github.io/json-ags/stockSimple.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Hubo un error en el response');
        }
        return response.json();
    })
    .then(data => {
        stock = data;
        let itemsEncontrados = stock.filter((element)=>{
            return element.marca == marcaElegida & element.modelo == modeloSeleccionado;
        });
    
        mostrarResultados(itemsEncontrados);
    })
    .catch(error => {
        Swal.fire({
            title: `Hubo un problema con la solicitud, probá más tarde`,
            icon: "error"
          })
    });

    

});

document.getElementById('carrito').addEventListener('click',()=>{
    modificaLayOut();
});

document.getElementById('modal').addEventListener('click',ocultaModal);



function buscaMarca() {
    let busqueda = document.getElementById('searcher').value;

    let select = document.getElementById('modelSelect');

    document.getElementById('lista').innerHTML = '';

    busqueda = busqueda.toLowerCase();

    select.innerHTML = '';

    for (let j = 0; j < marcas.length; j++) {

        marcaElegida = buscaEnErrores(marcas[j], busqueda);
        if ( marcaElegida != 'No') {

            //document.getElementById('results').innerHTML = '';

            let stock = [];

            fetch('https://psalat.github.io/json-ags/stock'+marcaElegida+'.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Hubo un error en el response');
                }
                return response.json();
            })
            .then(data => {
                stock = data;


                let stockDeMarcaFiltrado = stock.filter((elemento)=>{
                    return elemento.marca == marcaElegida;
                });
    
    
                let modelosDeMarcaElegidaConDuplicados = [];
    
                stockDeMarcaFiltrado.map((elemento)=>{
                    modelosDeMarcaElegidaConDuplicados.push(elemento.modelo);
                });
    
                
                let modelosSinDuplicados = [...new Set(modelosDeMarcaElegidaConDuplicados)];
    
    
                select.style.display = 'block';
    
    
                let selectorModelos = document.getElementById('modelSelect');
    
                let opcionModelo = document.createElement('option');
                opcionModelo.setAttribute('value','');
                opcionModelo.append('Seleccioná el modelo de ' + marcaElegida);
                selectorModelos.append(opcionModelo);
    
                modelosSinDuplicados.forEach(element => {
                    let opcionModelo = document.createElement('option');
                    opcionModelo.setAttribute('value',element);
                    opcionModelo.append(element);
                    selectorModelos.append(opcionModelo);
                });
                
                select.focus();

            })
            .catch(error => {
                Swal.fire({
                    title: `Hubo un problema con la solicitud, probá más tarde`,
                    icon: "error"
                  })
            });
            break;

            
        } 
    }

    if (marcaElegida == 'No'){
        //document.getElementById('lista').innerHTML = "No encontramos la marca buscada, repetí la búsqueda por favor";
        select.style.display = 'none';
        Swal.fire({
                title: `No encontramos la marca que buscás`,
                text: `Realizá nuevamente la búsqueda`,
                icon: "warning"
              })

    }
}

function buscaEnErrores(arrayDeError, ingreso) {
    if (arrayDeError.includes(ingreso)) {
        return arrayDeError[0];
    } else {
        return 'No';
    }
}

function mostrarResultados(arrayProductos) {
    arrayProductos.map((element)=>{
        let btnVerImagen = document.createElement('button');
        btnVerImagen.className = 'btnVerImagen';
        btnVerImagen.id = `verImagen${element.codigo}`;
        btnVerImagen.innerText = 'Ver Imagen';
        //btnVerImagen.setAttribute('onclick','jug('+element.codigo+')');

        let btnAgregarAlCarrito = document.createElement('button');
        btnAgregarAlCarrito.className = 'btnAgregarAlCarrito';
        btnAgregarAlCarrito.id = `Agregar${element.codigo}`;
        btnAgregarAlCarrito.innerText = '+';


    let renglonItem = `
                    <div class='idsC1'>
                        <div class='codigo'>${element.codigo}</div>
                        <div class='itemDatos'>
                            <div></div>
                            <div>${element.tipo} ${element.marca} ${element.modelo}</div>
                        </div>
                    </div>
                    <div class='itemImagen' id=itemImagen${element.codigo} onclick=agrandarImagen(${element.codigo})>
                        <img src='images/productos/${element.codigo}.png' width='80px'>
                    </div>
                    <div class='controles'>
                        <button class='AgregaACarrito' id='btnAAC${element.codigo}' onclick='agregaACarrito(${element.codigo})'><img src="images/masCarro.png" height="30px"></button>
                    </div>
        `;

        let itemDeStock = document.createElement('div');
        itemDeStock.className = 'itemDeStock';
        itemDeStock.id = `ids${element.codigo}`;
        itemDeStock.innerHTML = renglonItem;

        document.getElementById('lista').append(itemDeStock);

    });
}

function agregaACarrito(codigo) {
    let cantidad = Number(document.getElementById('cantidad').innerHTML) + 1;
    document.getElementById('cantidad').innerHTML = cantidad;

    let productoEncontrado = stock.find(producto => producto.codigo == codigo);
    let carritoTotal = {};
    
    totalCompra = totalCompra + Number(productoEncontrado.precio);

    if (localStorage.getItem('compra') == null){
        prodsAgregadosAlCarrito.push(codigo);
        localStorage.setItem('compra',JSON.stringify(prodsAgregadosAlCarrito));
        localStorage.setItem('totalCompra',totalCompra);

        carritoTotal = resumenDeCarrito(prodsAgregadosAlCarrito);
    } else {
        prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));
        prodsAgregadosAlCarrito.push(codigo);
        localStorage.setItem('compra',JSON.stringify(prodsAgregadosAlCarrito));
        localStorage.setItem('totalCompra',totalCompra);

        carritoTotal = resumenDeCarrito(prodsAgregadosAlCarrito);
    }

    renderCarritoCompleto(carritoTotal);

}

function agrandarImagen(codigo){
    let imagen = `<img src='images/productos/${codigo}.png' >`;
    let modalImagen = document.getElementById('modal');
    modalImagen.style.display = 'flex';
    modalImagen.innerHTML = imagen;
}

function resumenDeCarrito(arrayElementos) {
    const unicos = new Set(arrayElementos);

    let objetoCarritoCantidades = {};

    unicos.forEach((itemUnico)=>{
    let q = 0;
    arrayElementos.forEach((producto)=>{
        if(producto == itemUnico){
        q++
        }
    });

    objetoCarritoCantidades[itemUnico] = q;
    });

    return objetoCarritoCantidades;
}

function modificaImagenCarrito(cantidad) {
    document.getElementById('vidrios').innerHTML = '';
    if (cantidad > 10){
        cantidad = 10;
    }

    for (let i = 0; i < cantidad; i++) {
        dividrio = document.createElement('div');
        imagenVidrio = document.createElement('img');
        imagenVidrio.src = "images/vidrioCarrito.png";
        imagenVidrio.height = 50;

        dividrio.append(imagenVidrio);

        document.getElementById('vidrios').append(dividrio);
    }
}

function modificaLayOut() {
    let listaCarrito = document.getElementById('listaCarrito');

    let envista = listaCarrito.getAttribute('envista');

    if(envista == 1){
        listaCarrito.setAttribute('envista',0);
        document.querySelector('body').style.gridTemplateAreas = `
                                                                    'hLogo hLogo hCarrito'
                                                                    'sideMarcas searcher searcher'
                                                                    'sideMarcas results results'
                                                                    `;
        
    } else {
        
        listaCarrito.setAttribute('envista',1);
        document.querySelector('body').style.gridTemplateAreas = `
                                                                    'hLogo hLogo hCarrito'
                                                                    'sideMarcas searcher listaCarrito'
                                                                    'sideMarcas results listaCarrito'
                                                                    `;
        
        
    }
}

function ocultaModal() {
    document.getElementById('modal').style.display = 'none';
}