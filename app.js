

//Array de arrays, la posición 0 de cada subarray es el nombre de la marca correcta, los demás son posibles errores de tipeo

const marcas = [
    ['Fiat', 'Fia','fia', 'Diat','Giat','fiat','diat','giat'],
    ['Renault','renault','ren','Ren','Renol','renol','reno','Reno','Renaut','renaut'],
    ['Volkswagen','volkswagen','Volfagen','volfagen','Voluagen','voluagen','Volswagen','volswagen','Volkswaguen','volkswaguen','volk','Volk','volks','Volks'],
    ['Chevrolet','chevrolet','Chebrolet','chebrolet','Chevrole','chevrole','Chev','chev'],
    ['Ford','ford','For','for']
];


//Modelos de cada marca, con una modificación del código podría repetir la forma de tener en cuenta errores de tipeo
const modelosFiat = ['Uno','Punto','Linea','Toro'];

const modelosRenault = ['Duster', 'Oroch', 'Master'];

const modelosVolkswagen = ['Polo', 'Virtus', 'Passat', 'Vento'];

const modelosChevrolet = ['Tracker','Onix','S10'];

const modelosFord = ['Ka', 'Ranger', 'Focus', 'Mondeo'];

const abreviaturasVidrios = {psas:'Parabrisas',lta:'Luneta', pdi: 'Puerta del. Izq.', pdd:'Puerta del. der.', pti:'Puerta tras. izq.',ptd:'Puerta tras. der.'};


//Matriz de objetos de Stock
const stock = { Fiat:
                {
                    Uno:{psas:5,lta:4,pdi:0,pdd:0,pti:12,ptd:3},
                    Punto:{psas:9,lta:9,pdi:20,pdd:10,pti:1,ptd:33},
                    Linea:{psas:2,lta:2,pdi:4,pdd:40,pti:8,ptd:0},
                    Toro:{psas:12,lta:33,pdi:12,pdd:2,pti:1,ptd:3}
                },
                Renault:
                {
                    Duster:{psas:5,lta:4,pdi:0,pdd:0,pti:12,ptd:3},
                    Oroch:{psas:9,lta:9,pdi:20,pdd:10,pti:1,ptd:33},
                    Master:{psas:2,lta:2,pdi:4,pdd:40,pti:8,ptd:0}
                },
                Volkswagen:
                {
                    Polo:{psas:5,lta:4,pdi:0,pdd:0,pti:12,ptd:3},
                    Virtus:{psas:9,lta:9,pdi:20,pdd:10,pti:1,ptd:33},
                    Passat:{psas:2,lta:2,pdi:4,pdd:40,pti:8,ptd:0},
                    Vento:{psas:12,lta:33,pdi:12,pdd:2,pti:1,ptd:3}
                },
                Chevrolet:
                {
                    Tracker:{psas:5,lta:4,pdi:0,pdd:0,pti:12,ptd:3},
                    Onix:{psas:9,lta:3,pdi:20,pdd:10,pti:1,ptd:33},
                    S10:{psas:2,lta:2,pdi:4,pdd:40,pti:8,ptd:0}
                },
                Ford:
                {
                    Ka:{psas:5,lta:4,pdi:0,pdd:0,pti:12,ptd:3},
                    Ranger:{psas:6,lta:9,pdi:20,pdd:7,pti:1,ptd:33},
                    Focus:{psas:2,lta:12,pdi:4,pdd:40,pti:8,ptd:0},
                    Mondeo:{psas:12,lta:33,pdi:12,pdd:2,pti:1,ptd:3}
                }
                        
}


console.log(stock);


let marcaElegida = '';

let i = 0;

while (marcaElegida == '' || marcaElegida == 'No') {
    //console.log(i);
    if (i === 0) {
        inputMarca = prompt('Ingresá la marca de vehículo que está buscando');
    } else {
        inputMarca = prompt('No encontramos esa marca, ingresá nuevamente comprobando la ortografía');
    }
    
    for (let j = 0; j < marcas.length; j++) {
        //console.log(marcas[j]);
        marcaElegida = buscaEnErrores(marcas[j], inputMarca);
        if ( marcaElegida != 'No') {
            //console.log(marcaElegida)
            break;
        }
    }
    i++;
}

i=0;

let modeloElegido = '';

while (modeloElegido == '' || modeloElegido == 'No') {
    //console.log(i);
    if (i === 0) {
        inputModelo = prompt('Ingrese el modelo que está buscando');
    } else {
        inputModelo = prompt('No encontramos ese modelo, ingrese nuevamente');
    }

    switch (marcaElegida) {
        case 'Fiat':
            document.getElementById('lista').innerHTML = mostrarStock(modelosFiat, inputModelo);

            break;

          case 'Renault':
            document.getElementById('lista').innerHTML = mostrarStock(modelosRenault, inputModelo);

            break;
        
          case 'Volkswagen':
            document.getElementById('lista').innerHTML = mostrarStock(modelosVolkswagen, inputModelo);

            break;

          case 'Chevrolet':
            document.getElementById('lista').innerHTML = mostrarStock(modelosChevrolet, inputModelo);

            break;

          case 'Ford':
            document.getElementById('lista').innerHTML = mostrarStock(modelosFord, inputModelo);

            break;
    
        default:
            break;
    }
}







function buscaEnErrores (arrayDeError, ingreso) {
    if (arrayDeError.includes(ingreso)) {
        return arrayDeError[0];
    } else {
        return 'No';
    }
}

function buscaModelos(arrayDeMarca, modeloIngresado) {
    if (arrayDeMarca.includes(modeloIngresado)) {
        return modeloIngresado;
    } else {
        return 'No';
    }
}

function mostrarStock (modeloDondeBuscar, modeloBuscado) {
    if (buscaModelos(modeloDondeBuscar, modeloBuscado) == 'No') {
        alert('Modelo no encontrado para la marca ' + marcaElegida);
    } else {
        modeloElegido = buscaModelos(modeloDondeBuscar, modeloBuscado);
        //console.log (`Marca: ${marcaElegida} Modelo: ${modeloElegido}`);

        return 'Parabrisas ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['psas'] + '<br>' + 
        'Lunetas ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['lta'] + '<br>' +
        'Puertas del. izq. ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['pdi'] + '<br>' +
        'Puertas del. der. ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['pdd'] + '<br>' +
        'Puertas tras. izq. ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['pti'] + '<br>' +
        'Puertas tras. der. ' + marcaElegida + " " + modeloElegido + " :" + stock[marcaElegida][modeloElegido]['ptd'] + '<br>';
    }
}

