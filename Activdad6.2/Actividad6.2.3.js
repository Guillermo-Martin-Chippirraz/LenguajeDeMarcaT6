const frutas = new Array("Pera", "Plátano", "Manzana", "Naranja");
console.log(frutas[0]);
console.log(frutas.length);

/*a*/

frutas.sort();
console.log(frutas[0]);

/*b*/

frutas.push(prompt("Añade una pinche fruta"));
frutas.sort();
console.log(frutas[0]);