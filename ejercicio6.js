// 6. Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
// sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su producto.


let  menu = parseInt(prompt(`seleccione lo que desea pedir` + "\n" + `1.pizza🍕` + "\n" + `2.sandwiches🥪` + "\n" + `3.ensaladas🥙`));
let precio1 = 7000;
let precio2 = 5000;
let precio3 = 15000;
let salsa = 3000;

switch (menu){
    case 1:{
        alert(`la pizza tiene un costo de ${precio1} por unidad`);break;
    }
    case 2:{
        alert(`el sandwich tiene un costo de ${precio2} por unidad`);break;
    }
    case 3:{
        alert(`la ensalada  tiene un costo de ${precio3} por unidad`);break;
    }

}


let cantidad = parseInt(prompt(`cuantas porciones desea agregar?`));

if(menu == 1 ){
    alert(`su valor total es ${precio1*cantidad} `);
}

if(menu == 2){
    alert(`el sandwich tiene un valor de ${precio3}`)
let salsas = parseInt(prompt(`desea agregar salsa adicional tiene un valor de 3000` + `\n` + ))
}

if(menu == 3 ){
    alert(`su valor total es ${precio3*cantidad} `);
}


