
// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
// longitud.
// a. Pedir al usuario los lados y determinar si es equilátero o no

function triangulo (){
let lado1 =parseInt(prompt(`ingrese el lado 1 del triangulo`));
let lado2 =parseInt(prompt(`ingrese el lado 2 del triangulo`));
let lado3 =parseInt(prompt(`ingrese el lado 3 del triangulo`));
    
if (lado1==lado2&&lado2==lado3){
    (`es un triangulo equilatero`)
}else{
    alert(`el triangulo no es equilatero`)
}
}
triangulo()