window.addEventListener('DOMContentLoaded', function () {
    let botonB = this.document.getElementById("buttonb");
    let botonC = this.document.getElementById("buttonc");
    let parrafoC = this.document.getElementById("parrafoc");
    let divD = this.document.getElementById("divd");
    let inputE = this.document.getElementById("inpute");

    parrafoC.style.display = "none";

    function funBotonB() {
        alert("¡Enlaces! ¡Enlaces! Una solapa perdedora No soy un mugido ejemplar, atascado entre vainillas, atascado para siempre, etérnamente FOREVER (Argüelles) ¡Plasca! Una calculadora que no funciona ¡Syntax error! Pavino por el caminento del térror. ¿A quién le gustan los anacardos? A mí, pero solo si saben perdonar. Organismo unicelular, Darwin. Pez, Darwin Reptil, Darwin Mono, Darwin Ser humano, ¿Darwin? ¡Darwin! Tunéame el alma, morena, tunéamela; porque no hay chopito igual que tú. Me he comido dos Digimon, y ninguno sortea papeles, papeles, papel, papelera, pera. No me gustan las peras, bueno, si... pero prefiero el melocotón. Muestra, muestra, muestra, moist, muestra, muestra, muestra, muestra (x5396) ")
    }
    function funBotonC() {
        parrafoC.style.display = "block";
    }
    function funDivD1() {
        divD.innerHTML = "ª.";
    }
    function funDivD2() {
        divD.innerHTML = "No me acuerdo qué ponía en el lorem y me da pereza copiarlo y que se vea bien, más vale que esto te valga."
    }
    function funInpute(tecla) {
        if (tecla.key === "Delete" || tecla.key === "Backspace") {
            alert("No borres cosas.");
        }
    }
    botonB.addEventListener('click', funBotonB);
    botonC.addEventListener('dblclick', funBotonC);
    divD.addEventListener('mouseenter', funDivD1);
    divD.addEventListener('mouseout', funDivD2);
    inputE.addEventListener('keydown', funInpute);
});