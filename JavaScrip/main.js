console.log("Hola mundo")
let suma
suma = 3+5
console.log("Esta es la suma de 3+5:",suma)
let resta = 3-5
console.log(resta)
console.log(3+9)
console.log ("Desigualdades",3>9)
let miVariable = "un string"
console.log(miVariable)
miVariable = 9
console.log(miVariable)

let numero =2

if(numero%2==0){
    console.log("El numero", numero, "es par")
}else{
    console.log("El numero", numero, "no es par")
}
if((numero%3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){
    console.log("Violeta")
}else if(numero %3==0 && numero%5==0){
    console.log("Margarita")
}else if(numero %6==0 && numero%7==0){
    console.log("Rosa")
}else{
    console.log("No salio nada, no mostrar al cliente solo para el ejemplo")
}

if(numero %3==0 && numero%5==0){
    if(numero %6==0 && numero%7==0){
        console.log("Violeta")
    } else{
        console.log("Margarita")
    }
}else if(numero %6==0 && numero%7==0){
    console.log("Rosa")
}else {
    console.log("No salio nada, no mostrar al cliente solo para el ejemplo")
}

let entradaUsuarioPar = document .getElementById ("entradaUsuarioPar")
let btnPar = document . getElementById("btnPar")
let salidaPar = document .getElementById("salidaPar")
let numeroEjerciciosEsPar = 0

entradaUsuarioPar . addEventListener("input", 
    (evento) => {
        numeroEjerciciosEsPar = evento.target.value
        console.log (numeroEjerciciosEsPar)

    })
function esPar (numero) {
if (numero % 2 == 0) {
    return "es par"
}
else {
    return "no es par"
}
}
btnPar.addEventListener ( "click", ()=> {
    let resultado = esPar(numeroEjerciciosEsPar)
    let hijo = document.createElement ("h4")
    hijo.innerHTML= numeroEjerciciosEsPar + " "+ resultado
    salidaPar.appendChild (hijo)
})
    
   



