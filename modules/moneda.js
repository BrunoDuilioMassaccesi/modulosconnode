const { countries } = require('country-data');

function obtenerMoneda(codigoPais) {
    const pais = countries[codigoPais];

    if (pais && pais.currencies && pais.currencies.length > 0) {
        return pais.currencies[0]; 
    }
    return "Código de país no válido o sin moneda asociada.";
}

module.exports = { obtenerMoneda };
