const parsearUrl = require('./modules/url2');
const url = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"; 
const objeto = parsearUrl(url);
if (objeto != null) {
    console.log(objeto);
}else console.log('No se pudo parser la URL.');