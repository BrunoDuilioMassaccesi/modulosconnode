const { URL } = require('url');

function parsearUrl(direccion) {
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
}

module.exports = parsearUrl;
