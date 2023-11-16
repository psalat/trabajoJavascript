

//Array de arrays, la posición 0 de cada subarray es el nombre de la marca correcta, los demás son posibles errores de tipeo

const marcas = [
    ['Fiat', 'Fia','fia', 'Diat','Giat','fiat','diat','giat'],
    ['Renault','renault','ren','Ren','Renol','renol','reno','Reno','Renaut','renaut'],
    ['Volkswagen','volkswagen','Volfagen','volfagen','Voluagen','voluagen','Volswagen','volswagen','Volkswaguen','volkswaguen','volk','Volk','volks','Volks'],
    ['Chevrolet','chevrolet','Chebrolet','chebrolet','Chevrole','chevrole','Chev','chev'],
    ['Ford','ford','For','for'],
    ['Honda','honda','onda',]
];



const stock = [
                {codigo:10040,marca:'Fiat',modelo:'Uno',tipo:'Parabrisas',precio:13622,stock:7},
                {codigo:2282,marca:'Fiat',modelo:'Uno',tipo:'Puerta del. Izq.',precio:13803,stock:12},
                {codigo:2451,marca:'Fiat',modelo:'Uno',tipo:'Puerta del. Der.',precio:14127,stock:4},
                {codigo:2649,marca:'Fiat',modelo:'Uno',tipo:'Puerta tras. Izq.',precio:10288,stock:10},
                {codigo:1305,marca:'Fiat',modelo:'Uno',tipo:'Puerta tras. Der.',precio:10696,stock:15},
                {codigo:2775,marca:'Fiat',modelo:'Uno',tipo:'Luneta',precio:11265,stock:3},
                {codigo:10042,marca:'Fiat',modelo:'Punto',tipo:'Parabrisas',precio:12328,stock:4},
                {codigo:2028,marca:'Fiat',modelo:'Punto',tipo:'Puerta del. Izq.',precio:12138,stock:7},
                {codigo:2225,marca:'Fiat',modelo:'Punto',tipo:'Puerta del. Der.',precio:13424,stock:2},
                {codigo:2245,marca:'Fiat',modelo:'Punto',tipo:'Puerta tras. Izq.',precio:12227,stock:13},
                {codigo:1701,marca:'Fiat',modelo:'Punto',tipo:'Puerta tras. Der.',precio:13114,stock:15},
                {codigo:2607,marca:'Fiat',modelo:'Punto',tipo:'Luneta',precio:10799,stock:11},
                {codigo:10043,marca:'Fiat',modelo:'Cronos',tipo:'Parabrisas',precio:12628,stock:5},
                {codigo:1788,marca:'Fiat',modelo:'Cronos',tipo:'Puerta del. Izq.',precio:13003,stock:11},
                {codigo:1021,marca:'Fiat',modelo:'Cronos',tipo:'Puerta del. Der.',precio:14406,stock:10},
                {codigo:2068,marca:'Fiat',modelo:'Cronos',tipo:'Puerta tras. Izq.',precio:14458,stock:2},
                {codigo:2861,marca:'Fiat',modelo:'Cronos',tipo:'Puerta tras. Der.',precio:12468,stock:6},
                {codigo:1662,marca:'Fiat',modelo:'Cronos',tipo:'Luneta',precio:12319,stock:13},
                {codigo:10046,marca:'Fiat',modelo:'Linea',tipo:'Parabrisas',precio:10394,stock:9},
                {codigo:2786,marca:'Fiat',modelo:'Linea',tipo:'Puerta del. Izq.',precio:12318,stock:1},
                {codigo:1051,marca:'Fiat',modelo:'Linea',tipo:'Puerta del. Der.',precio:13496,stock:1},
                {codigo:2155,marca:'Fiat',modelo:'Linea',tipo:'Puerta tras. Izq.',precio:10049,stock:10},
                {codigo:1616,marca:'Fiat',modelo:'Linea',tipo:'Puerta tras. Der.',precio:14178,stock:0},
                {codigo:1306,marca:'Fiat',modelo:'Linea',tipo:'Luneta',precio:12207,stock:14},
                {codigo:10050,marca:'Chevrolet',modelo:'Tracker',tipo:'Parabrisas',precio:11147,stock:9},
                {codigo:1019,marca:'Chevrolet',modelo:'Tracker',tipo:'Puerta del. Izq.',precio:12088,stock:14},
                {codigo:2958,marca:'Chevrolet',modelo:'Tracker',tipo:'Puerta del. Der.',precio:12142,stock:12},
                {codigo:2829,marca:'Chevrolet',modelo:'Tracker',tipo:'Puerta tras. Izq.',precio:10386,stock:3},
                {codigo:2175,marca:'Chevrolet',modelo:'Tracker',tipo:'Puerta tras. Der.',precio:12430,stock:2},
                {codigo:2700,marca:'Chevrolet',modelo:'Tracker',tipo:'Luneta',precio:14128,stock:14},
                {codigo:10053,marca:'Chevrolet',modelo:'S10',tipo:'Parabrisas',precio:12004,stock:8},
                {codigo:1604,marca:'Chevrolet',modelo:'S10',tipo:'Puerta del. Izq.',precio:12020,stock:3},
                {codigo:1625,marca:'Chevrolet',modelo:'S10',tipo:'Puerta del. Der.',precio:10884,stock:6},
                {codigo:1429,marca:'Chevrolet',modelo:'S10',tipo:'Puerta tras. Izq.',precio:10428,stock:8},
                {codigo:1404,marca:'Chevrolet',modelo:'S10',tipo:'Puerta tras. Der.',precio:13344,stock:0},
                {codigo:1378,marca:'Chevrolet',modelo:'S10',tipo:'Luneta',precio:10435,stock:9},
                {codigo:10056,marca:'Chevrolet',modelo:'Silverado',tipo:'Parabrisas',precio:12556,stock:6},
                {codigo:1452,marca:'Chevrolet',modelo:'Silverado',tipo:'Puerta del. Izq.',precio:12058,stock:8},
                {codigo:1277,marca:'Chevrolet',modelo:'Silverado',tipo:'Puerta del. Der.',precio:12838,stock:5},
                {codigo:2193,marca:'Chevrolet',modelo:'Silverado',tipo:'Puerta tras. Izq.',precio:14149,stock:6},
                {codigo:1646,marca:'Chevrolet',modelo:'Silverado',tipo:'Puerta tras. Der.',precio:10583,stock:4},
                {codigo:2344,marca:'Chevrolet',modelo:'Silverado',tipo:'Luneta',precio:10032,stock:13},
                {codigo:10076,marca:'Chevrolet',modelo:'Cruze',tipo:'Parabrisas',precio:12292,stock:10},
                {codigo:1614,marca:'Chevrolet',modelo:'Cruze',tipo:'Puerta del. Izq.',precio:14448,stock:13},
                {codigo:2637,marca:'Chevrolet',modelo:'Cruze',tipo:'Puerta del. Der.',precio:14217,stock:11},
                {codigo:2722,marca:'Chevrolet',modelo:'Cruze',tipo:'Puerta tras. Izq.',precio:13278,stock:14},
                {codigo:1062,marca:'Chevrolet',modelo:'Cruze',tipo:'Puerta tras. Der.',precio:10582,stock:5},
                {codigo:2513,marca:'Chevrolet',modelo:'Cruze',tipo:'Luneta',precio:14387,stock:8},
                {codigo:10086,marca:'Renault',modelo:'Torino',tipo:'Parabrisas',precio:14004,stock:0},
                {codigo:2280,marca:'Renault',modelo:'Torino',tipo:'Puerta del. Izq.',precio:11179,stock:13},
                {codigo:2371,marca:'Renault',modelo:'Torino',tipo:'Puerta del. Der.',precio:12487,stock:4},
                {codigo:1881,marca:'Renault',modelo:'Torino',tipo:'Puerta tras. Izq.',precio:14040,stock:10},
                {codigo:1030,marca:'Renault',modelo:'Torino',tipo:'Puerta tras. Der.',precio:14442,stock:7},
                {codigo:2097,marca:'Renault',modelo:'Torino',tipo:'Luneta',precio:11002,stock:2},
                {codigo:10100,marca:'Renault',modelo:'Laguna',tipo:'Parabrisas',precio:11515,stock:13},
                {codigo:1394,marca:'Renault',modelo:'Laguna',tipo:'Puerta del. Izq.',precio:10393,stock:13},
                {codigo:2617,marca:'Renault',modelo:'Laguna',tipo:'Puerta del. Der.',precio:13432,stock:2},
                {codigo:2648,marca:'Renault',modelo:'Laguna',tipo:'Puerta tras. Izq.',precio:11768,stock:1},
                {codigo:2803,marca:'Renault',modelo:'Laguna',tipo:'Puerta tras. Der.',precio:14188,stock:5},
                {codigo:1101,marca:'Renault',modelo:'Laguna',tipo:'Luneta',precio:13582,stock:11},
                {codigo:10103,marca:'Renault',modelo:'Twingo',tipo:'Parabrisas',precio:14323,stock:3},
                {codigo:2854,marca:'Renault',modelo:'Twingo',tipo:'Puerta del. Izq.',precio:14785,stock:6},
                {codigo:2498,marca:'Renault',modelo:'Twingo',tipo:'Puerta del. Der.',precio:14098,stock:2},
                {codigo:1863,marca:'Renault',modelo:'Twingo',tipo:'Puerta tras. Izq.',precio:14802,stock:12},
                {codigo:1131,marca:'Renault',modelo:'Twingo',tipo:'Puerta tras. Der.',precio:14454,stock:14},
                {codigo:2863,marca:'Renault',modelo:'Twingo',tipo:'Luneta',precio:14691,stock:3},
                {codigo:10104,marca:'Renault',modelo:'Koleos',tipo:'Parabrisas',precio:12538,stock:2},
                {codigo:1245,marca:'Renault',modelo:'Koleos',tipo:'Puerta del. Izq.',precio:13100,stock:5},
                {codigo:1473,marca:'Renault',modelo:'Koleos',tipo:'Puerta del. Der.',precio:10416,stock:2},
                {codigo:1179,marca:'Renault',modelo:'Koleos',tipo:'Puerta tras. Izq.',precio:11147,stock:8},
                {codigo:1513,marca:'Renault',modelo:'Koleos',tipo:'Puerta tras. Der.',precio:11089,stock:11},
                {codigo:2228,marca:'Renault',modelo:'Koleos',tipo:'Luneta',precio:14803,stock:14},
                {codigo:10112,marca:'Volkswagen',modelo:'Vento',tipo:'Parabrisas',precio:13881,stock:14},
                {codigo:2275,marca:'Volkswagen',modelo:'Vento',tipo:'Puerta del. Izq.',precio:10050,stock:0},
                {codigo:2139,marca:'Volkswagen',modelo:'Vento',tipo:'Puerta del. Der.',precio:12508,stock:11},
                {codigo:2309,marca:'Volkswagen',modelo:'Vento',tipo:'Puerta tras. Izq.',precio:10252,stock:14},
                {codigo:2752,marca:'Volkswagen',modelo:'Vento',tipo:'Puerta tras. Der.',precio:13005,stock:4},
                {codigo:2713,marca:'Volkswagen',modelo:'Vento',tipo:'Luneta',precio:10094,stock:15},
                {codigo:10118,marca:'Volkswagen',modelo:'Bora',tipo:'Parabrisas',precio:13154,stock:8},
                {codigo:2171,marca:'Volkswagen',modelo:'Bora',tipo:'Puerta del. Izq.',precio:13870,stock:10},
                {codigo:2025,marca:'Volkswagen',modelo:'Bora',tipo:'Puerta del. Der.',precio:13594,stock:4},
                {codigo:2952,marca:'Volkswagen',modelo:'Bora',tipo:'Puerta tras. Izq.',precio:13826,stock:14},
                {codigo:1450,marca:'Volkswagen',modelo:'Bora',tipo:'Puerta tras. Der.',precio:12888,stock:6},
                {codigo:2911,marca:'Volkswagen',modelo:'Bora',tipo:'Luneta',precio:12710,stock:0},
                {codigo:10122,marca:'Volkswagen',modelo:'Polo',tipo:'Parabrisas',precio:12323,stock:6},
                {codigo:1271,marca:'Volkswagen',modelo:'Polo',tipo:'Puerta del. Izq.',precio:13175,stock:4},
                {codigo:1376,marca:'Volkswagen',modelo:'Polo',tipo:'Puerta del. Der.',precio:10525,stock:7},
                {codigo:1774,marca:'Volkswagen',modelo:'Polo',tipo:'Puerta tras. Izq.',precio:12460,stock:0},
                {codigo:1303,marca:'Volkswagen',modelo:'Polo',tipo:'Puerta tras. Der.',precio:10359,stock:13},
                {codigo:2520,marca:'Volkswagen',modelo:'Polo',tipo:'Luneta',precio:11597,stock:11},
                {codigo:10123,marca:'Volkswagen',modelo:'Vertis',tipo:'Parabrisas',precio:14080,stock:13},
                {codigo:1631,marca:'Volkswagen',modelo:'Vertis',tipo:'Puerta del. Izq.',precio:10670,stock:6},
                {codigo:1648,marca:'Volkswagen',modelo:'Vertis',tipo:'Puerta del. Der.',precio:10785,stock:8},
                {codigo:2034,marca:'Volkswagen',modelo:'Vertis',tipo:'Puerta tras. Izq.',precio:13053,stock:15},
                {codigo:1321,marca:'Volkswagen',modelo:'Vertis',tipo:'Puerta tras. Der.',precio:13985,stock:10},
                {codigo:2940,marca:'Volkswagen',modelo:'Vertis',tipo:'Luneta',precio:12611,stock:13},
                {codigo:10129,marca:'Honda',modelo:'HRV',tipo:'Parabrisas',precio:12040,stock:4},
                {codigo:1014,marca:'Honda',modelo:'HRV',tipo:'Puerta del. Izq.',precio:11995,stock:8},
                {codigo:1694,marca:'Honda',modelo:'HRV',tipo:'Puerta del. Der.',precio:11875,stock:9},
                {codigo:1047,marca:'Honda',modelo:'HRV',tipo:'Puerta tras. Izq.',precio:13322,stock:4},
                {codigo:1237,marca:'Honda',modelo:'HRV',tipo:'Puerta tras. Der.',precio:10990,stock:14},
                {codigo:2897,marca:'Honda',modelo:'HRV',tipo:'Luneta',precio:12137,stock:6},
                {codigo:10131,marca:'Honda',modelo:'Accord',tipo:'Parabrisas',precio:13157,stock:12},
                {codigo:2122,marca:'Honda',modelo:'Accord',tipo:'Puerta del. Izq.',precio:12256,stock:13},
                {codigo:1313,marca:'Honda',modelo:'Accord',tipo:'Puerta del. Der.',precio:13088,stock:9},
                {codigo:2876,marca:'Honda',modelo:'Accord',tipo:'Puerta tras. Izq.',precio:13992,stock:14},
                {codigo:2082,marca:'Honda',modelo:'Accord',tipo:'Puerta tras. Der.',precio:13040,stock:7},
                {codigo:1861,marca:'Honda',modelo:'Accord',tipo:'Luneta',precio:11254,stock:1},
                {codigo:10142,marca:'Honda',modelo:'Civic',tipo:'Parabrisas',precio:11949,stock:6},
                {codigo:2747,marca:'Honda',modelo:'Civic',tipo:'Puerta del. Izq.',precio:12284,stock:7},
                {codigo:1424,marca:'Honda',modelo:'Civic',tipo:'Puerta del. Der.',precio:12199,stock:1},
                {codigo:1542,marca:'Honda',modelo:'Civic',tipo:'Puerta tras. Izq.',precio:14695,stock:2},
                {codigo:2480,marca:'Honda',modelo:'Civic',tipo:'Puerta tras. Der.',precio:11518,stock:5},
                {codigo:1081,marca:'Honda',modelo:'Civic',tipo:'Luneta',precio:12868,stock:5},
                {codigo:10143,marca:'Honda',modelo:'CRV',tipo:'Parabrisas',precio:11362,stock:7},
                {codigo:1945,marca:'Honda',modelo:'CRV',tipo:'Puerta del. Izq.',precio:11022,stock:3},
                {codigo:1250,marca:'Honda',modelo:'CRV',tipo:'Puerta del. Der.',precio:12841,stock:7},
                {codigo:1163,marca:'Honda',modelo:'CRV',tipo:'Puerta tras. Izq.',precio:13993,stock:9},
                {codigo:2464,marca:'Honda',modelo:'CRV',tipo:'Puerta tras. Der.',precio:10711,stock:15},
                {codigo:2123,marca:'Honda',modelo:'CRV',tipo:'Luneta',precio:13065,stock:6},
                {codigo:10147,marca:'Ford',modelo:'Focus',tipo:'Parabrisas',precio:12912,stock:1},
                {codigo:2153,marca:'Ford',modelo:'Focus',tipo:'Puerta del. Izq.',precio:11127,stock:7},
                {codigo:2111,marca:'Ford',modelo:'Focus',tipo:'Puerta del. Der.',precio:14215,stock:15},
                {codigo:1423,marca:'Ford',modelo:'Focus',tipo:'Puerta tras. Izq.',precio:11457,stock:0},
                {codigo:2143,marca:'Ford',modelo:'Focus',tipo:'Puerta tras. Der.',precio:14744,stock:7},
                {codigo:2069,marca:'Ford',modelo:'Focus',tipo:'Luneta',precio:14901,stock:3},
                {codigo:10153,marca:'Ford',modelo:'Mondeo',tipo:'Parabrisas',precio:11259,stock:2},
                {codigo:2573,marca:'Ford',modelo:'Mondeo',tipo:'Puerta del. Izq.',precio:13624,stock:7},
                {codigo:2853,marca:'Ford',modelo:'Mondeo',tipo:'Puerta del. Der.',precio:13816,stock:2},
                {codigo:1246,marca:'Ford',modelo:'Mondeo',tipo:'Puerta tras. Izq.',precio:11231,stock:2},
                {codigo:1781,marca:'Ford',modelo:'Mondeo',tipo:'Puerta tras. Der.',precio:10831,stock:1},
                {codigo:1474,marca:'Ford',modelo:'Mondeo',tipo:'Luneta',precio:10074,stock:14},
                {codigo:10154,marca:'Ford',modelo:'Ka',tipo:'Parabrisas',precio:10949,stock:7},
                {codigo:1765,marca:'Ford',modelo:'Ka',tipo:'Puerta del. Izq.',precio:13105,stock:7},
                {codigo:1266,marca:'Ford',modelo:'Ka',tipo:'Puerta del. Der.',precio:11377,stock:6},
                {codigo:1859,marca:'Ford',modelo:'Ka',tipo:'Puerta tras. Izq.',precio:11956,stock:0},
                {codigo:2269,marca:'Ford',modelo:'Ka',tipo:'Puerta tras. Der.',precio:12771,stock:3},
                {codigo:2154,marca:'Ford',modelo:'Ka',tipo:'Luneta',precio:12709,stock:3},
                {codigo:10156,marca:'Ford',modelo:'F150',tipo:'Parabrisas',precio:12767,stock:11},
                {codigo:1913,marca:'Ford',modelo:'F150',tipo:'Puerta del. Izq.',precio:11133,stock:11},
                {codigo:1909,marca:'Ford',modelo:'F150',tipo:'Puerta del. Der.',precio:10329,stock:11},
                {codigo:1805,marca:'Ford',modelo:'F150',tipo:'Puerta tras. Izq.',precio:12283,stock:14},
                {codigo:1373,marca:'Ford',modelo:'F150',tipo:'Puerta tras. Der.',precio:10370,stock:5},
                {codigo:2986,marca:'Ford',modelo:'F150',tipo:'Luneta',precio:11843,stock:7}    
                ];


let marcaElegida = '';

let i = 0;


let modeloElegido = '';

let prodsAgregadosAlCarrito = [];
let totalCompra = 0;


document.getElementById('btnSearcher').addEventListener("click", ()=> {
    let busqueda = document.getElementById('searcher').value;

    let select = document.getElementById('modelSelect');

    select.innerHTML = '';

    for (let j = 0; j < marcas.length; j++) {
        //console.log(marcas[j]);
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
            opcionModelo.append('Seleccioná el modelo');
            selectorModelos.append(opcionModelo);

            modelosSinDuplicados.forEach(element => {
                let opcionModelo = document.createElement('option');
                opcionModelo.setAttribute('value',element);
                opcionModelo.append(element);
                selectorModelos.append(opcionModelo);
            });
            
            break;
        } 
    }

    if (marcaElegida == 'No'){
        document.getElementById('results').innerHTML = "No encontramos la marca buscada, repetí la búsqueda por favor";
    }
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

    listaCarrito.style.display = 'block';
});



function buscaEnErrores (arrayDeError, ingreso) {
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

    let cosa = `
                    <div class='idsC1'>
                        <div class='codigo'>${element.codigo}</div>
                        <div class='itemDatos'>
                            <div></div>
                            <div>${element.tipo} ${element.marca} ${element.modelo}</div>
                        </div>
                    </div>
                    <div class='itemImagen'>
                        <img src='images/productos/${element.codigo}.png' width='50px'>
                    </div>
                    <div class='controles'>
                        <button class='AgregaACarrito' id='btnAAC${element.codigo}' onclick='agregaACarrito(${element.codigo})'>Agregar al carrito</button>
                    </div>
        `;


        let itemDeStock = document.createElement('div');
        itemDeStock.className = 'itemDeStock';
        itemDeStock.id = `ids${element.codigo}`;
        itemDeStock.innerHTML = cosa;

        // itemDeStock.appendChild(btnVerImagen);
        // itemDeStock.appendChild(btnAgregarAlCarrito);

        

        itemDeStock.innerHTML = cosa;

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
        console.log(localStorage.getItem('compra'));
        console.log(localStorage.getItem('totalCompra'));
    }

    

    document.getElementById('listaDeCompras').innerHTML += productoEncontrado.codigo + " " + productoEncontrado.tipo + " " + productoEncontrado.marca + " " + productoEncontrado.modelo + " $" + productoEncontrado.precio + "<br>";

    document.getElementById('totalCompra').innerHTML = 'Total de Compra: $' + totalCompra;
}