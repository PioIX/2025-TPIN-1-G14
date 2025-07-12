//hola no se que hcaer xd lol
idLogged = 0

/*hamburger menu logo
function myFunction(x) {
    x.classList.toggle("change");
}*/

//LISTO EL REGISTER NADIE LO TOQUEE PLS

//register
async function registerFetch() { // @igna tenes que hacer el appi de agregar un usuario a la bd

    let datos = {
        usuario: ui.getUser(),
        id_usuario: ui.getId(),
        contraseña: ui.getPassword(),
        nombre: ui.getName(),
        apellido: ui.getLastName()
    }

    try {
        let resultado = await fetch('http://localhost:4000/insertarUsuarios', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })

        let response = await resultado.json();
        console.log(response.res)
        return (response.res)
    } catch (error) {
        res.send(error)
    }

}

async function register() {
    let respuesta = await registerFetch();
    if (respuesta == 1) {
        idLogged = ui.getId()
        //let user = ui.getUser()
        ui.clearLoginInputs()
        location.href = "./index2.html"

    }
}


//LISTO FUNCIONA NADIE TOQUE NADA PLS

//log in
async function logInFetch() {

    let datos = {
        usuario: ui.getUser(),
        contraseña: ui.getPassword(),
        id_usuario: ui.getId()
    }
    try {
        let resultado = await fetch('http://localhost:4000/verificarUser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })

        let response = await resultado.json();
        console.log(response);
        return response.res  // <-- devolvés la respuesta acá

    } catch (error) {
        console.error("Error en fetch:", error);
        return null;
    }
}

async function logIn() {
    let respuesta = await logInFetch();
    if (respuesta == 1) {
        idLogged = ui.getId()
        //let user = ui.getUser()
        ui.clearLoginInputs()
        if (idLogged == 3) {
            location.href = "./indexAdmin.html"
        } else {
            location.href = "./index2.html"
        }


    }
}

//log out para el hamburger menu
function logOut() {

    idLogged = 0
    location.href = "./index.html"

}

//funciones admin


//borrar peliculas

//LISTO FUNCIONA NO TOCAR

async function fetchEliminarPelicula() {

    let id = Number(ui.getIdPeliculaBorrar())

    let resultado = await fetch('http://localhost:4000/borrarPelicula', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id })
    })
    try {
        let response = await resultado.json();
        console.log(response);
        return response.res  // <-- devolvés la respuesta acá

    } catch (error) {
        console.error("Error en fetch:", error);
        return null;
    }

}

async function eliminarPelicula() {

    let response = fetchEliminarPelicula()

    if (response.res == 1) {
        console.log("La pelicula se elimino correctamente")
        ui.clearInputs()
    }
}

//agregar pelicula

//LISTO FUNCIONA 
async function fetchAgregarPelicula() {

    let datos = {
        nombre_pelicula: ui.getTitulo(),
        fecha_estreno: ui.getFecha(),
        nombre_imagen: ui.getLink(),
        id_pelicula: ui.getIdPelicula()
    }
    let resultado = await fetch('http://localhost:4000/insertarPeliculas', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })
    try {
        let response = await resultado.json();
        console.log(response.res);
        return response.res  // <-- devolvés la respuesta acá

    } catch (error) {
        console.error("Error en fetch:", error);
        return null;
    }


}

async function agregarPelicula() {

    let response = fetchAgregarPelicula();

    if (response.res == "1") {
        console.log("La pelicula se agregó correctamente")
        ui.clearInputs()
    }

}

//borrar usuario

async function fetchEliminarUsuario() {

    let id_usuario = Number(ui.getIdUsuario())

    let resultado = await fetch('http://localhost:4000/borrarUser', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_usuario: id_usuario })
    })
    try {
        let response = await resultado.json();
        console.log(response);
        return response.res  // <-- devolvés la respuesta acá

    } catch (error) {
        console.error("Error en fetch:", error);
        return null;
    }

}

async function eliminarUser() {

    let response = fetchEliminarUsuario()

    if (response.res == 1) {
        console.log("Ek usuario se elimino correctamente")
        ui.clearInputs()
    }
}


function clickeoImagen(imagen) {
    
    if (imagen == 1) {

        if (tituloCorrecto == ui.getTitle1()) {
            console.log(1)
            let respuesta = comparar2(imagen,estrenoCorrecto)
            return 1

        } else {
            console.log(2)
            let respuesta = perdiste()
            return 2
        }
    }
    else {

        if (tituloCorrecto == ui.getTitle2()) {
            console.log(1)
            let respuesta = comparar2(imagen,estrenoCorrecto)
            return 1
        } else {
            console.log(2)
            let respuesta = perdiste()
            return 2
        }
    }
}
let correcta = ''
let idCorrecto = -1;
async function fetchComparar() {

    let resultado = await fetch('http://localhost:4000/compararEstrenos', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    let response = await resultado.json()

    ui.setImg1(response[0].nombre_img1)
    ui.setImg2(response[0].nombre_img2)
    ui.setTitle1(response[0].pelicula_1)
    ui.setTitle2(response[0].pelicula_2)

    
    idCorrecto = response[0].id_primero;
    console.log(response[0], idCorrecto);
    tituloCorrecto = response[0].estreno_primero
    estrenoCorrecto = response[0].estreno_correcto
}
let rondas = 1
let score = 0


let finalScore = 0
function comparar(){
    
}
async function comparar2(imagenPresionada) {

    let resultado = await fetch('http://localhost:4000/segundoComparar', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idCorrecto })
    })
    let response = await resultado.json()
    
    console.log(estrenoCorrecto,tituloCorrecto,estrenoCorrecto)


    let id2 = response[0].id_pelicula2
    let pelicula2 = response[0].pelicula_2
    let estreno2 = response[0].estreno_2


    console.log(estreno2,pelicula2,id2)



    if(estrenoCorrecto > estreno2){
        estrenoCorrecto = estreno2
        tituloCorrecto = pelicula2
        idCorrecto = id2
    }
    console.log(estrenoCorrecto,tituloCorrecto,estrenoCorrecto)

    if (imagenPresionada == 1) {
        ui.setImg2(response[0].nombre_img2)
        ui.setTitle2(pelicula2)
    } else {
        ui.setImg1(response[0].nombre_img2)
        ui.setTitle1(pelicula2)
    }

    rondas++
    score = score + 5
    ui.setRondas(rondas)
    ui.setScore(score)
    return(estrenoCorrecto,tituloCorrecto,idCorrecto)
}

function guardarPuntaje(puntaje){
    finalScore = puntaje
    return(finalScore)
}

function perdiste() {
    //let respuesta = guardarPuntaje(score)
    ui.setScore(score)
    rondas = 1
    score = 0
    location.href = "./index3.html"
}

function volverInicio(){
     location.href = "./index.html"
}

function juego() {
    location.href = "./index2.html"
}