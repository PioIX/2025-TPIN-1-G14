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

async function agregarPelicula(){

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
        console.log(1)

        if(correcta == ui.getTitle1){
            return 
        }
        return 1
    }
    else{
        console.log(2)
        return 2
    }
}
let correcta = ''
async function fetchComparar () {

    let resultado = await fetch('http://localhost:4000/compararEstrenos', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    let response = await resultado.json()

    ui.setImg1(response[0].nombre_img1)
    ui.setImg2(response[0].nombre_img2)
    ui.setTitle1(response[0].pelicula_1)
    ui.setTitle2(response[0].pelicula_2)

    correcta = response[0].estreno_primero
}

async function comparar() { 

    let resultado = await fetchComprar()
  
}