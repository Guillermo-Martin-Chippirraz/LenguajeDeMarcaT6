function uneArray(array1, array2) {
    let resultado = [];
    for (let elemento of array1) {

        resultado.push(elemento);
    }

    for (let elemento of array2) {
        resultado.push(elemento);
    }

    return resultado;
}