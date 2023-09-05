
// La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Solicitar al usuario el costo de la casa.
// b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
// c. Calcular la comisión de la inmobiliaria en la venta así:
// • Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
// • Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
// d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido
// por la inmobiliaria. 

let user = parseInt(prompt(`ingrese el costo de su casa`));

let tipo = parseInt(prompt(`ingrese 1.inmueble usado o 2. para inmueble nuevo`));

switch (tipo){
    case 1:{
        alert(`El propietario recibe 90 % que seria ${user*0.9} el de la inmobiliaria recibe ${user*0.1}`);
    } 
    case 2:{
        alert(`como su vivuenda es nueva usted recibe ${user*0.88} y la inmobiliaria ${user*0.12}`);
    }
}
// function comision(){

// let tipo = parseInt(prompt(`ingrese 1.inmueble usado o 2. para inmueble nuevo`));

// if (tipo==1){
//alert(`al usted ser el propietario recibira el 90% ${user*0.9} ` + "\n" + `la inmobiliaria recibira el 10% ${user*0.1}`)
// }

// else if(tipo==2){
//     alert(`al usted ser propietario recibira el 88% ${user*0.88}` + "\n" + `la inmobiliaria recibira el 12% ${user*0.12}`)
// }
// }
// comision()


