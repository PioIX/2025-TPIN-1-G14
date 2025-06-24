var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 3000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

//Pongo el servidor a escuchar
app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
});

/*////////////////////////////////////////////////////////////////////
                        DE ACA PARA ABAJO CODEO 
////////////////////////////////////////////////////////////////////*/

app.get('/CompararEstrenos', async function (req, res) {
    let respuesta
    try {
        console.log(req.query)
        respuesta = await realizarQuery(`SELECT p1.nombre_pelicula AS pelicula_1, p1.fecha_estreno AS estreno_1, p2.nombre_pelicula AS pelicula_2, p2.fecha_estreno AS estreno_2,
        IF(p1.fecha_estreno < p2.fecha_estreno, p1.nombre_pelicula, p2.nombre_pelicula) AS estreno_primero
        FROM Peliculas p1
        INNER JOIN Peliculas p2 ON p1.id_pelicula < p2.id_pelicula
        ORDER BY RAND()
        LIMIT 1;`)
        res.send(respuesta)
        }
    catch (error) {
        res.send(error)
    }
});

app.post('/insertarUsuarios', async function (req, res) {
    console.log(req.body)
    await realizarQuery(`INSERT INTO Usuarios (usuario, id_usuario, contraseña, nombre, apellido)
VALUES ('${req.body.usuario}', '${req.body.id_usuario}', '${req.body.contraseña}', '${req.body.nombre}', ${req.body.apellido})`)
    res.send({res:"ok"})
})

