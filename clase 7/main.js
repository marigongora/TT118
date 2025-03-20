let entradaUsuario = document.getElementById("entradaUsuario")
let btncalcular = document.getElementById("btnCalcular")
let salidaPar= document.getElementById ("salidaPar")
let numeroEjercicioEsPar = 0

entradaUsuario.addEventListener("input",(evento)=> {
    numeroEjercicioEsPar = evento.target.value 
    console.log(numeroEjercicioEsPar) }
)

function esPar(numero) {
    if((numero%3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){ 
        return "violeta"
    } 
    else if(numero %3==0 && numero%5==0) { 
        return "margarita"
    } 
    else if(numero %6==0 && numero%7==0){
    return "rosa"
    } 
    else { 
        return "no resultado"
    }

}

btncalcular.addEventListener ("click", () => {
   let resultado = esPar (numeroEjercicioEsPar)
    let hijo = document.createElement ("h4")
    hijo.innerHTML= numeroEjercicioEsPar + " " + resultado
    salidaPar.appendChild(hijo)
})

let tres = document.getElementById("tres")
let numerotres = 0

tres.addEventListener("input",(evento)=> {
    numerotres= evento.target.value 
    console.log(numerotres) })

    function esPar(numero) {
        if(numero%tres==0){
            return "es multiplo" + tres
        }
        else {
            return"no es multiplo"+ tres}
        } 