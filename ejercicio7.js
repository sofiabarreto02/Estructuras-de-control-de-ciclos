// La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplo


let pregunta = parseInt(prompt(`ingrese 1. para devolucion y 2. para perdida`));
function pago (){
if (pregunta==1){
    let cantidad1 =parseInt(prompt(`indiquenos la cantidad de dias de retraso`));
    let indique = parseInt(prompt(`digite 1. para libros prestados o 2. para revistas prestadas`));
    let cantidades = parseInt(prompt(`diganos la cantidad de elementos prestados`));
    
if (indique==1){
    alert(`debe de pagarnos ${cantidad1*cantidades*600}`)
}else if(indique==2){
    alert(`debe de pagarnos ${500*cantidad1*cantidades}`)

} 
}

if(pregunta==2){
    let perdida = 1000
    let cantidad2 =parseInt(prompt(`indiquenos la cantidad de elementos perdidos`));
    alert(`debe de pagarnos ${cantidad2*perdida}`)
}
}
pago()