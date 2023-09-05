// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):

// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar 



let tamaño = prompt(`De que tamaño desea su stiker?❤️ ` + "\n" + `Seleccione👇`
 + "\n" + `1.para tamaño pequeño` + "\n" + `2.para tamaño grande`);

let cantidad = parseInt(prompt(`cuantos stikers desea comprar?`));

while (cantidad<10){
   alert(`solo puedes comprar minimo 10 stikers`)
   cantidad = parseInt(prompt(`cuantos stikers desea comprar?`));
}

if(tamaño==1 && cantidad>10){
   let precio1 = 4000
   alert(`el valor del stiker es de ${precio1} el total de su pedido es de ${precio1*cantidad}`);
}else if(tamaño==2 && cantidad>10){
   let precio2 =6000
    alert(`el valor del stiker es de ${precio2} el total de su pedido es de ${precio2*cantidad}`);
}







// let tamaño = parseInt(prompt(`De que tamaño desea su stiker?❤️ ` + "\n" + `Seleccione👇`
//  + "\n" + `1.para tamaño pequeño` + "\n" + `2.para tamaño grande`));

// while (tamaño<1 && tamaño>2){
//    alert(`solo debe digitar 1 o 2`);
//    let tamaño = parseInt(prompt(`De que tamaño desea su stiker?❤️ ` + "\n" + `Seleccione👇`
//  + "\n" + `1.para tamaño pequeño` + "\n" + `2.para tamaño grande`));}



// let precio1 = 4000
// let precio2 = 6000

// switch (tamaño){
//    case 1:{
//       alert(`Seleccionaste el tamaño pequeño su precio es de: ${precio1}`);break;
//    }
//    case 2:{
//       alert(`seleccionaste el tamaño grande su precio es de: ${precio2}`);break;
//    }
//  }


// let cantidad = parseInt(prompt(`ìngrese la cantidad que desea comprar`));


// if(cantidad>10){
//    alert(`agregado al carrito de compras`)
// }
// if(cantidad<10){
//    alert(`solo puede agregar minimo 10 stikers❤️ a su compra`)
// let cantidad = parseInt(prompt(`ìngrese la cantidad que desea comprar`));
// }

// if(tamaño == 1){
//    alert(`su total a pagar es ${cantidad*precio1}💕`)
// }else if (tamaño == 2){
//    alert(`el total a pagar es ${cantidad*precio2}💕`)
// }




