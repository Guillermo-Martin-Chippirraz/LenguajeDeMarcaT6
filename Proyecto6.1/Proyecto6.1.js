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
    })

    bateadorMejora.addEventListener("click", () => {
        if (puntos <= precioBateador) {
            puntos -= precioBateador;
            bateadoresContratados++;
            precioBateador = Math.floor(precioBateador * 1.3);

            setInterval(() => {
                puntos += 30 * bateadoresContratados;
            }, 1000);
        }
    });

    botasMejora.addEventListener("click", () => {
        if (puntos >= precioClavo) {
            puntos -= precioClavo;
            ClavosComprados++;
            pointsPerClick = 50 * ClavosComprados;
            precioClavo = Math.floor(precioClavo * 1.2);
        }
    });

    balaceoMejora.addEventListener("click", () => {
        if (puntos >= precioBalazo) {
            puntos += puntosBala - precioBalazo;
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
                let i = 0
                setInterval(() => {
                    if (i < 5) {
                        i++;
                        mejoraBala.style.display = "block";
                        balaceoMejora.disabled = true;
                    } else {
                        mejoraBala.style.display = "none"
                        balaComprada = false;
                    }
                }, 1000)

            } else {
                balaceoMejora.disabled = puntos < precioBalazo;
            }
        } else {
            balaceoMejora.disabled = puntos < precioBalazo;
        }

        if (puntos > 10) {
            bebe.style.cursor = "url(Recursos/bota2.png), pointer";
        }

        bateadorMejora.innerText = precioBateador + " puntos = Contrata a un bateador +30/s"
        botasMejora.innerText = precioClavo + " puntos = Compra botas de púas +50/clic";
        balaceoMejora.innerText = precioBalazo + " puntos = Balacéalo +100"
        bateadorMejora.disabled = puntos < precioBateador;
        botasMejora.disabled = puntos < precioClavo;

    }

    setInterval(() => {
        actualizaPantalla();
    }, 1);
})