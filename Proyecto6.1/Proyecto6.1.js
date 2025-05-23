window.addEventListener("DOMContentLoaded", function () {
    let puntos = 0;
    let pointsPerClick = 1;
    let ClavosComprados = 0;
    let bateadoresContratados = 0;
    let balaComprada = false;
    let puntosBala = 100;
    let precioClavo = 50;
    let precioBateador = 10;
    let precioBalazo = 70;
    let fase2Iniciada = false;

    const bebe = document.getElementById("bebe");
    const bateadorMejora = document.getElementById("bate");
    const botasMejora = document.getElementById("botas");
    const balaceoMejora = document.getElementById("balazo");
    const puntosDisplay = document.getElementById("contador");
    const mejoraBate = document.getElementById("bateador");
    const mejoraClavo = document.getElementById("clavos");
    const mejoraBala = document.getElementById("revolver");
    const sonidoPatada = new Audio("C:/Users/Propietario/Documents/RepositorioMarcas/Tema6/LenguajeDeMarcaT6/Proyecto6.1/Recursos/Audio/zapsplat_impacts_body_hit_punch_or_kick_whoosh_004_90398.mp3");
    const sonidoBate = new Audio("C:/Users/Propietario/Documents/RepositorioMarcas/Tema6/LenguajeDeMarcaT6/Proyecto6.1/Recursos/Audio/zapsplat_impacts_body_hit_baseball_bat_hard_whack_crack_crunch_44146.mp3");
    const sonidoClavos = new Audio("C:/Users/Propietario/Documents/RepositorioMarcas/Tema6/LenguajeDeMarcaT6/Proyecto6.1/Recursos/Audio/BotaClavos.mp3");
    const sonidoBalazo = new Audio("C:/Users/Propietario/Documents/RepositorioMarcas/Tema6/LenguajeDeMarcaT6/Proyecto6.1/Recursos/Audio/Balazo.mp3");
    const risaBebe1 = new Audio("C:/Users/Propietario/Documents/RepositorioMarcas/Tema6/LenguajeDeMarcaT6/Proyecto6.1/Recursos/Audio/risaBebe1.mp3");

    document.getElementsByTagName("body")[0].style.color = "red";

    bebe.addEventListener("click", () => {
        if(ClavosComprados == 0){
            sonidoPatada.play();
        }else{
            sonidoClavos.play();
        }
        puntos += pointsPerClick;
    })

    bateadorMejora.addEventListener("click", () => {
        if (puntos >= precioBateador) {
            puntos -= precioBateador;
            bateadoresContratados++;
            precioBateador = Math.floor(precioBateador * 1.3);

            let bateo = setInterval(() => {
                puntos += 30 * bateadoresContratados;
                sonidoBate.play();
                if (puntos >= 1000){
                    clearInterval(bateo);
                }
            }, 1000);
        }
    });

    botasMejora.addEventListener("click", () => {
        if (puntos >= precioClavo) {
            puntos -= precioClavo;
            ClavosComprados++;
            pointsPerClick += 50;
            precioClavo = Math.floor(precioClavo * 1.2);
        }
    });

    balaceoMejora.addEventListener("click", () => {
        if (puntos >= precioBalazo) {
            sonidoBalazo.play();
            puntos -= precioBalazo;
            puntos += puntosBala;
            balaComprada = true;
            precioBalazo = Math.floor(precioBalazo * 2);
        }
    });

    function actualizaPantalla() {
        puntosDisplay.textContent = puntos;
        if (bateadoresContratados > 0) {
            mejoraBate.style.display = "block";
        }

        if (ClavosComprados > 0) {
            mejoraClavo.style.display = "block";
        }

        if (balaComprada) {
            let i = 0
            if (balaComprada) {
                mejoraBala.style.display = "block";
                setTimeout(() => {
                    mejoraBala.style.display = "none"
                }, 5000)

            } else {
                balaceoMejora.disabled = puntos < precioBalazo;
            }
        } else {
            balaceoMejora.disabled = puntos < precioBalazo;
        }

        if (puntos > 10) {
            bebe.style.cursor = "url(\"Recursos/bota2.png\"), pointer";
        }

        bateadorMejora.innerText = precioBateador + " puntos = Contrata a un bateador +30/s"
        botasMejora.innerText = precioClavo + " puntos = Compra botas de púas +50/clic";
        balaceoMejora.innerText = precioBalazo + " puntos = Balacéalo +100"
        bateadorMejora.disabled = puntos < precioBateador;
        botasMejora.disabled = puntos < precioClavo;

    }

    function actualizaFondo(){
        let porcentaje = Math.min(puntos / 1000, 1);
        let rojo = Math.floor(porcentaje * 255);
        let azulYVerde = Math.floor((1-porcentaje) * 255);
        document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${rojo}, ${azulYVerde}, ${azulYVerde})`;
        document.getElementsByTagName("body")[0].style.color = `rgb(255, ${rojo}, ${rojo})`;
    }

    function iniciarFase2(){
        document.querySelector(".mejoras").style.display = "none";
        risaBebe1.play();
        const vidaContainer = document.createElement("div");
        vidaContainer.id = "vidaContainer";
        vidaContainer.innerHTML = `<div id="vidaBarra"></div>`;
        document.body.appendChild(vidaContainer);
        const barraVida = document.getElementById("vidaBarra");
        let vida = 100;
        

        function reducirVida(){
            if(barraVida){
                vida -= 10;
            barraVida.style.width = vida + "%";
            if(vida <= 0) {
                alert("¡Has perdido! La barra de vida llegó a 0.");
                location.reload();
            }
            }
            
        }
        setInterval(reducirVida, 2000);

        const botonMetralleta = document.createElement("button");
        botonMetralleta.id = "botonMetralleta";
        botonMetralleta.textContent = "¡REVIENTA ESE *** BICHO!";
        document.body.appendChild(botonMetralleta);

        botonMetralleta.style.display = "block";

        botonMetralleta.addEventListener("mousedown", () => {
            const incrementar = setInterval(() => {
                puntos += 1000;
                actualizaPantalla();
                if (puntos >= 100000) {
                    alert("¡BIEN HECHO, SOLDADO!");
                    clearInterval(incrementar);
                    location.reload();
                }
            }, 100);

            botonMetralleta.addEventListener("mouseup", () => clearInterval(incrementar));
        });
    }
    setInterval(() => {
        actualizaFondo();
        actualizaPantalla();
        if(puntos >= 1000 && !fase2Iniciada){
            iniciarFase2();
            pointsPerClick = 0;
            fase2Iniciada = true
        }
    }, 100);
    
})