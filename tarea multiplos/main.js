let entrada0 = document. getElementById ("entrada0")
let btncalcular = document.getElementById("btnCalcular")
let salidaMultiplo= document.getElementById ("salidaMultiplo")
let numero = 0

entrada0.addEventListener("input", (evento)=> {
    numero = evento.target.value
    console.log(numero);
})
{
    if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("FizzBuzz");

} else if (numero % 3 == 0){
    console.log("Fizz");

} else if (numero % 5 == 0){
    console.log("Buzz")
}
}

function funcionFizzBuzz(n){
    for  (let numero= 1; numero <=n; numero ++) {
        if (numero % 3 == 0 && numero% 5 == 0) {
            console.log ("funcionFizzBuzz");
            let hijo = document.createElement ("li")
    hijo.innerHTML= "funcionFizzBuzz"
    salidaMultiplo.appendChild(hijo)

    } else if (numero % 3 == 0) {
        console.log("Fizz")
        let hijo = document.createElement ("li")
        hijo.innerHTML= "Fizz"
        salidaMultiplo.appendChild(hijo)

    } else if (numero % 5 == 0) {
        console.log ("Buzz")
        let hijo = document.createElement ("li")
        hijo.innerHTML= "Buzz"
        salidaMultiplo.appendChild(hijo)

     }  else {
        console.log(numero)
        let hijo = document.createElement ("li")
        hijo.innerHTML= numero
        salidaMultiplo.appendChild(hijo)
     } 
    }
}
    btncalcular.addEventListener ("click", () => {
        let hijo = document.createElement ("li")
        let resultado = funcionFizzBuzz (numero)
        hijo.innerHTML= ("li") + numero + " " + resultado

    salidaMultiplo.appendChild(hijo)
})