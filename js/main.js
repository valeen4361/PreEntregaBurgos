let Jugador1 = "jugador1";
let Jugador2 = "jugador2";

function TirarDado(){
    setTimeout(function(){
        let randomNumber1 = Math.floor(Math.random() *6) + 1;
        let randomNumber2 = Math.floor(Math.random() *6) + 1;

        document.querySelector(".img1").setAttribute("src", "dado" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dado" + randomNumber2 + ".png");

        if(randomNumber1 === randomNumber2){
            document.querySelector("h1").innerHTML = "Es un empate!"
        }

        else if (randomNumber1 < randomNumber2){
            document.querySelector("h1").innerHTML = ("El " + " " + Jugador2 + " " +" Gana!");
        }

        else{
                document.querySelector("h1").innerHTML = ("El " + " " + Jugador1 + " "+" Gana!");
        }

    }, 250);
}