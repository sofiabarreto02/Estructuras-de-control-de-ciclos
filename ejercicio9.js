// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus 
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// // d. El sistema debe arrojar el ganador y perdedor de la votación

let contadorAna = 0;
let contadorDiego = 0;
let contadorRondas = 1;

while (contadorRondas<=10){
alert(`HOLA BIENVENIDO A VOTAR DE FORMA ELECTRONICA`);
let votos = parseInt(prompt(`ingrese 1. para votar por ANA MARIA SUAREZ` + "\n" + `ingrese 2. para votar por DIEGO ACERO`));
if(votos==1){
    alert(`Usted ha votado por ana maria, gracias por votar`);
    contadorAna ++
    contadorRondas ++
}else if(votos==2){
    alert(`Usted ha votado por Diego Acero, gracias por votar`);
    contadorDiego ++
    contadorRondas++
}
}

if(contadorAna>contadorDiego){
    alert(`La ganadora es Ana Maria asi que el perdedor es Diego Acero`)
}else if (contadorAna<contadorDiego){
    alert(`El ganador es Diego Acero asi que la perdedora es Ana Maria Suarez`)

}


