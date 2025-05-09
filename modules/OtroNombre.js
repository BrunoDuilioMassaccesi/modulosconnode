const fs = require('fs');

function copiar(entrada, salida) {
    fs.readFile(entrada, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }

        fs.writeFile(salida, data, (err) => {
            if (err) {
                console.error("Error al escribir el archivo:", err);
            } else {
                console.log("Archivo copiado exitosamente.");
            }
        });
    });
}

module.exports = copiar;
