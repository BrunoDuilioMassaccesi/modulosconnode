
const parsearUrl = require('./modules/url');

const url = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
const objeto = parsearUrl(url);

console.log(objeto);