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

    const bebe = document.getElementById("bebe");
    const bateadorMejora = document.getElementById("bate");
    const botasMejora = document.getElementById("botas");
    const balaceoMejora = document.getElementById("balazo");
    const puntosDisplay = document.getElementById("contador");
    const mejoraBate = document.getElementById("bateador");
    const mejoraClavo = document.getElementById("clavos");
    const mejoraBala = document.getElementById("revolver");

    document.getElementsByTagName("body")[0].style.color = "red";

    bebe.addEventListener("click", () => {
        puntos += pointsPerClick;
        actualizaPantalla();
    })

    bateadorMejora.addEventListener("click", () => {
        if (puntos <= precioBateador) {
            puntos -= precioBateador;
            bateadoresContratados++;
            precioBateador = Math.floor(precioBateador * 1.3);

            setInterval(() => {
                puntos += pointsPerClick * 30;
                actualizaPantalla();
            }, 1000);
        }
    });

    botasMejora.addEventListener("click", () => {
        if (puntos >= precioClavo) {
            puntos -= precioClavo;
            pointsPerClick++;
            ClavosComprados++;
            precioClavo = Math.floor(precioClavo * 1.2);
            actualizarPantalla();
        }
    });

    balaceoMejora.addEventListener("click", () => {
        if (puntos >= precioBalazo) {
            puntos += puntosBala - precioBalazo;
            balaComprada = true;
            precioBalazo = Math.floor(precioBalazo * 2);
            actualizaPantalla();
        }
    });

    function actualizaPantalla() {
        puntosDisplay.textContent = puntos;
        if (bateadoresContratados > 0) {
            mejoraBate.style.display = "block";
        }

        if (ClavosComprados > 1) {
            mejoraClavo.style.display = "block";
        }

        if (balaComprada) {
            setInterval(() => {
                mejoraBala.style.display = "block";
                balaceoMejora.disabled = true;
            }, 30000);
            balaComprada = false;
        } else {
            balaceoMejora.disabled = puntos < precioBalazo;
        }

        bateadorMejora.innerText = precioBateador + "puntos = Contrata a un bateador +30/s"
        botasMejora.innerText = precioClavo + "puntos = Compra botas de púas +50/clic";
        balaceoMejora.innerText = precioBalazo + "puntos = Balacéalo +100"
        bateadorMejora.disabled = puntos < precioBateador;
        botasMejora.disabled = puntos < precioClavo;

    }
})