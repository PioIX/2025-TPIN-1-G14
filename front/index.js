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