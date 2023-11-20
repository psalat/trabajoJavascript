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

    let itemsEncontrados = stock.filter((element)=>{
        return element.marca == marcaElegida & element.modelo == modeloSeleccionado;
    });

    mostrarResultados(itemsEncontrados);

});

document.getElementById('carrito').addEventListener('click',()=>{
    let listaCarrito = document.getElementById('listaCarrito');
    if(listaCarrito.style.display == 'block') {
        listaCarrito.style.display = 'none';
    } else {
        listaCarrito.style.display = 'block';
    }
    
});

document.getElementById('modalImagenAgrandada').addEventListener('click',()=>{
    document.getElementById('modalImagenAgrandada').style.display = 'none';
});

function buscaMarca() {
    let busqueda = document.getElementById('searcher').value;

    let select = document.getElementById('modelSelect');

    select.innerHTML = '';

    for (let j = 0; j < marcas.length; j++) {

        marcaElegida = buscaEnErrores(marcas[j], busqueda);
        if ( marcaElegida != 'No') {

            document.getElementById('results').innerHTML = '';

            let stockDeMarcaFiltrado = stock.filter((elemento)=>{
                return elemento.marca == marcaElegida;
            });


            let modelosDeMarcaElegidaConDuplicados = [];

            stockDeMarcaFiltrado.map((elemento)=>{
                modelosDeMarcaElegidaConDuplicados.push(elemento.modelo);
            });

            
            let modelosSinDuplicados = [...new Set(modelosDeMarcaElegidaConDuplicados)];

            console.log(modelosSinDuplicados);


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
            break;
        } 
    }

    if (marcaElegida == 'No'){
        document.getElementById('lista').innerHTML = "No encontramos la marca buscada, repetí la búsqueda por favor";
        select.style.display = 'none';
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
                    <div class='itemImagen' id=itemImagen${element.codigo} onclick=agrandarImagen(${element.codigo})><div>
                        <img src='images/productos/${element.codigo}.png' width='80px'></div>
                    </div>
                    <div class='controles'>
                        <button class='AgregaACarrito' id='btnAAC${element.codigo}' onclick='agregaACarrito(${element.codigo})'>Agregar al carrito</button>
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
    
    totalCompra = totalCompra + Number(productoEncontrado.precio);

    if (localStorage.getItem('compra') == null){
        prodsAgregadosAlCarrito.push(codigo);
        localStorage.setItem('compra',JSON.stringify(prodsAgregadosAlCarrito));
        localStorage.setItem('totalCompra',totalCompra);
    } else {
        prodsAgregadosAlCarrito = JSON.parse(localStorage.getItem('compra'));
        prodsAgregadosAlCarrito.push(codigo);
        localStorage.setItem('compra',JSON.stringify(prodsAgregadosAlCarrito));
        localStorage.setItem('totalCompra',totalCompra);
    }

    document.getElementById('listaDeCompras').innerHTML += renderLineaCarrito(productoEncontrado,cantidad-1);

    document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
}

function agrandarImagen(codigo){
    let imagen = `<img src='images/productos/${codigo}.png' >`;
    let modalImagen = document.getElementById('modalImagenAgrandada');
    modalImagen.style.display = 'flex';
    modalImagen.innerHTML = imagen;
}