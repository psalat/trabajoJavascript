

//Array de arrays, la posición 0 de cada subarray es el nombre de la marca correcta, los demás son posibles errores de tipeo

const marcas = [
    ['Fiat', 'Fia','fia', 'Diat','Giat','fiat','diat','giat'],
    ['Renault','renault','ren','Ren','Renol','renol','reno','Reno','Renaut','renaut'],
    ['Volkswagen','volkswagen','Volfagen','volfagen','Voluagen','voluagen','Volswagen','volswagen','Volkswaguen','volkswaguen','volk','Volk','volks','Volks'],
    ['Chevrolet','chevrolet','Chebrolet','chebrolet','Chevrole','chevrole','Chev','chev'],
    ['Ford','ford','For','for']
];


let modelosFiat = ['Uno','Punto','Linea','Toro'];

let modelosReanult = ['Duster', 'Oroch', 'Master'];

let modelosVolkswagen = ['Polo', 'Virtus', 'Passat', 'Vento'];

let modelosChevrolet = ['Tracker','Onix','S10'];

let modelosFord = ['Ka', 'Ranger', 'Focus', 'Mondeo'];

let vidrios = ['Parabrisas', 'Luneta', 'Techo', 'Puerta del. Izq.', 'Puerta del. der.', 'Puerta tras. izq.', 'Puerta tras. der.', 'Aleta del. izq.', 'Aleta del. der.', 'Aleta tras. izq.', 'Aleta tras. der.'];

//let inputMarca = prompt('Ingrese la Marca del vehículo que está buscando');

let marcaElegida = '';

let i = 0;
while (marcaElegida == '' || marcaElegida == 'No') {
    //console.log(i);
    if (i === 0) {
        inputMarca = prompt('Ingrese la marca de vehículo que está buscando');
    } else {
        inputMarca = prompt('No encontramos esa marca, ingrese nuevamente, compruebe ortografía');
    }
    
    for (let j = 0; j < marcas.length; j++) {
        //console.log(marcas[j]);
        marcaElegida = buscaEnErrores(marcas[j], inputMarca);
        if ( marcaElegida != 'No') {
            console.log(marcaElegida)
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
            mostrarModelos (modelosFiat, inputModelo);
            break;

          case 'Renault':
            mostrarModelos (modelosReanult, inputModelo);
            break;
        
          case 'Volkswagen':
            mostrarModelos (modelosVolkswagen, inputModelo);
            break;

          case 'Chevrolet':
            mostrarModelos (modelosChevrolet, inputModelo);
            break;

          case 'Ford':
            mostrarModelos (modelosFord, inputModelo);
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

function mostrarModelos (modeloDondeBuscar, modeloBuscado) {
  if (buscaModelos(modeloDondeBuscar, modeloBuscado) == 'No') {
      alert('Modelo no encontrado para la marca ' + marcaElegida);
  } else {
      modeloElegido = buscaModelos(modeloDondeBuscar, modeloBuscado);
      console.log (`Marca: ${marcaElegida} Modelo: ${modeloElegido}`)
  }
}

