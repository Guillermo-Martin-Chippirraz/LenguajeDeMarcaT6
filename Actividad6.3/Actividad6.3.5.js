let num4 = prompt("Escribe un numerico");
let str4 = num4.toString();
let array4 = str4.split("");
array4 = array4.reverse();
str4 = array4.join("");
num4 = parseInt(str4);
console.log(num4);