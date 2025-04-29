let variable = 1;
{
    let variable = 2;
    console.log(variable);
}
console.log(variable);
/*
Esto sucede porque la declaración let permite declarar variables en ámbito de bloque,
de forma que afecta a sólo el bloque de código en el que se encuentre.
*/