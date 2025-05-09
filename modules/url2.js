const { URL } = require('url');

function parsearUrl(direccion) {
    try {
        const url = new URL(direccion);
        const parametros = {};
        url.searchParams.forEach((value, key) => {
            parametros[key] = value;
        });

        return {
            host: `${url.protocol}//${url.host}`,
            pathname: url.pathname,
            parametros
        };
    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
        return null;
    }
}

module.exports = parsearUrl;
