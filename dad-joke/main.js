let btnJoke = document.getElementById ("btnJoke")
let joke = document.getElementById ("joke")

btnJoke.addEventListener("click",getJoke)

async function getJoke () { 
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers:{
                "Accept": "application/json"
            }
    
        })
        const data = await res.json ()
        console.log (data.joke)
        let hijo = document.createElement
        joke.innerHTML= "chiste" + data.joke

    } catch (error) {
        console.error("Error in call")
    }
}
