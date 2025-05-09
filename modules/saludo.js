function saludar(nombre1, nombre2) {
    const concatenado = nombre1 + nombre2;

    const interpolado = `Hola ${nombre1} y ${nombre2}`;

    console.log("Concatenado:", concatenado);
    console.log("Interpolado:", interpolado);

    return interpolado;
}

module.exports = saludar;

