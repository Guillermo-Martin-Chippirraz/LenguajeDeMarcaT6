window.addEventListener("DOMContentLoaded", function () {
    let edad = this.prompt("Por favor, introduzca su edad");

    if (parseInt(edad) < 18) {
        this.alert("No deberías estar aquí.")
    }

    let numero = this.prompt("Introduce un número");

    if (numero == parseInt(numero)) {
        if (parseInt(numero) % 2 == 0) {
            this.alert("Ese es par");
        } else {
            this.alert("Ese es impar");
        }
    } else {
        this.alert("Eso no es un número");
    }



    let estacion = this.prompt("¿En qué estación del año naciste?");
    switch (estacion.toLowerCase()) {
        case "primavera":
            this.alert("La época de las mariposas y la alergia");
            break;
        case "verano":
            this.alert("Hace calor pero al menos no hay clase de Lenguaje de Marcas");
            break;
        case "otoño":
            this.alert("Esa estación no existe ya. Ahora se llama verano 2");
            break;
        case "invierno":
            this.alert("Hace fresco, pero la verdad que se agradece");
            break;
        default:
            this.alert("Eso no es una estación.");
    }
})