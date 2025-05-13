let numeroA;
do {
    numeroA = prompt("Escribe un número par, por favor:");
} while (parseInt(numeroA) % 2 !== 0);

let numeroB = 0;

while (numeroB < 100) {
    numeroB += parseInt(prompt("Introduce un número, por favor:"));
    console.log(numeroB);
}

for (let i = 0; i < 101; i++) {
    console.log(i);
}

let array = ["patata", "da truthy?", "m", "ª", "yasta"];

array.forEach((element) => console.log(element));

let string = "Macuto";

for (const letra of string) {
    console.log(letra);
}