// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.// servicio lavanderia


// let tipoServicio = prompt(`Qué tipo de servicio desea usar lavado o planchado`);



// function servicios() {

    
//     }
//     if(tipoServicio=="lavado"){
//         let tipoLavado = parseInt(prompt(`seleccione🧼 1. para lavado en seco ` + "\n" + `2. para lavado normal`));
//         let cantidad = parseInt(prompt(`ingrese la cantidad de prendas que desea lavar`));
     
//     if(tipoLavado==1){
//         alert(`el valor total del servicio es de: ${cantidad*2000} y su domicilio es gratis`)

//     }else if(tipoLavado==2){

//         alert(`el valor total del servicio es de  ${cantidad*1500} y su domicilio es gratis`)
//     }
    
//     }if(tipoServicio==="planchado"){

//         let cantidad = parseInt(prompt(`ingrese la cantidad de prendas que desea planchar`));
//         let domicilio = 3000;
//         let planchado =1800;
//         let total=cantidad*planchado;
        
//         alert(`el valor total del servicio es de ${total} mas el valor de su domicilio su total es ${total+domicilio}`)
// } 

    

// servicios()



let servicio = prompt(`que tipo de servicio desea adquirir lavado👚 o planchado🫧`);

function tipoServicio (){
    if(servicio=="lavado"){
        let tipoLavado = parseInt(prompt(`seleccione🧼 ` + "\n" + `1.lavado en seco` + "\n" + `2.lavado normal`))
        let cantidad = parseInt(prompt(`digite la cantidad de prendas`));

    switch (tipoLavado) {
        case 1:{
            alert(`el valor total de su servicio es de ${cantidad*2000} y su domicilio es gratis`);break;}
        case 2:{
             alert(`èl valor total de sus servicio es de ${cantidad*1500} y su domicilio es gratis`);break;}
    
    }   
} 
    else if (servicio=="planchado"){
        cantidad = parseInt(prompt(`digite la cantidad de prendas`));
        let total = cantidad*1800
        let domicilio = 3000
        let totalfinal = total+domicilio

        alert(`el total de su servicio es: ${total} y su total adicionando el domicilio es de ${totalfinal}`)
        
    }
}


        
tipoServicio()