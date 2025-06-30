var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 3000

// Convierte una petición recibida (POST-GET...) a objeto JSON

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

//Pongo el servidor a escuchar

app.listen(port, function () {
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


app.post('/insertarUsuarios', async function (req, res) {//api para el register
    console.log(req.body)
    try {
        const comprobar = await realizarQuery(`SELECT * FROM Usuarios WHERE usuario = '${req.body.usuario}' OR id_usuario = ${req.body.id_usuario}`)
        if (comprobar.length > 0) {
            res.send({ res : 2})
            return
        } await realizarQuery(`INSERT INTO Usuarios (usuario, id_usuario, contraseña, nombre, apellido)
    VALUES ('${req.body.usuario}', ${req.body.id_usuario}, '${req.body.contraseña}', '${req.body.nombre}', '${req.body.apellido}')`)
        res.send({ res: 1 })
    } catch (error) {

    }
})

app.post('/verificarUser', async function (req, res) { //api para el logIn
    console.log(req.body)

    const resultado = await realizarQuery(`
        SELECT * FROM Usuarios WHERE usuario = '${req.body.usuario}' AND contraseña = '${req.body.contraseña}' AND id_usuario = ${req.body.id_usuario}
    `)

    if (resultado.length > 0) {
        res.send({ res: 1 })
    } else {
        res.send({ res: 2 })
    }

})

app.delete('/borrarUser', async function (req, res) {
    console.log(req.body)
    await realizarQuery(`DELETE FROM Usuarios WHERE id_usuario = ${req.body.id_usuario}`)
    res.send({res:"ok"})
})

app.delete('/borrarPelicula', async function (req, res) {
    console.log(req.body)
    await realizarQuery(`DELETE FROM Peliculas WHERE id_pelicula = ${req.body.id_pelicula}`)
    res.send({res:"ok"})
})

app.delete('/borrarPelicula', async function (req, res) {
    console.log(req.body)
    await realizarQuery(`DELETE FROM Peliculas WHERE id_pelicula = ${req.body.id_pelicula}`)
    res.send({res:"ok"})
})

app.post('/insertarPeliculas', async function (req, res) {
    console.log(req.body)

    const comprobar = await realizarQuery(`SELECT * FROM Peliculas WHERE id_pelicula = ${req.body.id_pelicula}`)
    if (comprobar.length > 0) {
        res.send("Ya existe una pelicula con ese ID")
        return
    }

    await realizarQuery(`INSERT INTO Peliculas (id_pelicula, nombre_pelicula, fecha_estreno, nombre_imagen)
    VALUES (${req.body.id_pelicula}, '${req.body.nombre_pelicula}', '${req.body.fecha_estreno}', '${req.body.nombre_imagen}')`)
    res.send({res:"ok"})
})