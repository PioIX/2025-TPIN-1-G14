//hola no se que hcaer xd lol
idLogged = 0

/*hamburger menu logo*/
function myFunction(x) {
    x.classList.toggle("change");
}

async function fetchCheckNewUser(user, name, lastName, Password, id) { /* @igna hace una appi para cada uno de los 
    parametros que tengo que aca que se fije si existen en la base 
    de datos ---> si no los encuentra que devuelva 1 y si los encuentra que devuelva 0*/

    // COMO TE DIJKE POR WPP LO HICE CON EL DE ANAJO
}

/*async function register() { // @igna tenes que hacer el appi de agregar un usuario a la bd  //FUNCION POST HECHA UWU SE LLAMA /insertarUsuarios
  x.classList.toggle("change");
}*/

async function register() { // @igna tenes que hacer el appi de agregar un usuario a la bd

    let user = ui.getUser()
    let name = ui.getName()
    let lastName = ui.getLastName()
    let password = ui.getPassword()
    let id = ui.getId()

    if (await fetchCheckNewUser() == 1) {
        users.push(new User(name, lastName, password, user, id))

    }
}

/*function obtenerDatos() { //LOLO SI QUERES ESTO SACLO YO ENTENDI Q QUERTIAS Q HAGA EL FETCH YA HICE TODOS LOS PEDIDOS HTTP QIE ME PEDISTE EN EL BACK
    let datos = {
        user: ui.getUser(),
        id: ui.getId(),
        password: ui.getPassword(),
        name: ui.getName(),
        lastName: ui.getLastName(),
    }

    console.log("Datos a enviar:", datos)
    return datos
}*/

/*async function envioPost(datos) {
    try {
        let resultado = await fetch('http://localhost:4000/insertarUsuarios', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })

        let response = await resultado.json();
        console.log("Respuesta del servidor:", response)
    } catch (error) {
        res.send(error)
    }
} 

async function fetchCheckUser(id, user, password) {

    await fetch //aca va la funcion post app que tenes que hacer @igna pasado por parametro el user, password, y el id que es el dni para verificar que exista el usuario y que sea correcto
}*/

async function logInFetch() {
    let datos = {
        id: ui.getId(),
        user: ui.getUser(),
        password : ui.getPassword()
    }

    try {
        let resultado = await fetch('http://localhost:4000/verificarUser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })

        let response = await resultado.json();
        console.log("Respuesta del servidor:", response)
    }
    catch (error) {
        console.log(error)
    }

    /*if (resultado == ) {
        idLogged = id

    }*/

}


function logIn(){
    let respuesta = logInFetch()
    console.log(respuesta)
}

function logOut() {

    idLogged = 0
    location.href = "./index.html"


}