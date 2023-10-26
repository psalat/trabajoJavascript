

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

let inputMarca = prompt('Ingrese la Marca del vehículo que está buscando');

let marcaElegida;

for (let i = 0; i < marcas.length; i++) {
    marcaElegida = buscaEnErrores(marcas[i], inputMarca);
    if ( marcaElegida != 'No') {
        console.log(marcaElegida)
        break;
    }
}

if (marcaElegida == 'No') {
    console.log('Marca no encontrada');
}


function buscaEnErrores (arrayDeError, ingreso) {
    if (arrayDeError.includes(ingreso)) {
        return arrayDeError[0];
    } else {
        return 'No';
    }
}

