var http = require("http"); /*1*/

var manejador = function(solicitud, respuesta) { /*3*/
    console.log("Recibimos una nueva petición"); 
    respuesta.end("Hola Mundo");
};

var servidor = http.createServer(manejador); /*2*/

servidor.listen(8080);

