//hola no se que hcaer xd lol
idLogged = 0

/*hamburger menu logo*/
function myFunction(x) {
  x.classList.toggle("change");
}
async function fetchCheckNewUser(user,name,lastName,Password,id){ /* @igna hace una appi para cada uno de los 
    parametros que tengo que aca que se fije si existen en la base 
    de datos ---> si no los encuentra que devuelva 1 y si los encuentra que devuelva 0*/

}
async function register() { // @igna tenes que hacer el appi de agregar un usuario a la bd

    let user = ui.getUser()
    let name = ui.getName()
    let lastName = ui.getLastName()
    let password = ui.getPassword()
    let id = ui.getId()

    if(await fetchCheckNewUser() == 1){ //aca va la funcion post app que tenes que hacer @igna pasado por parametro el user, fullName (nombre y apellido juntos), password, y el id que es el dni
       
        users.push(new User(name,lastName,password,username,id))

    } 

}
async function fetchCheckUser(id, user, password) {
    
    await fetch //aca va la funcion post app que tenes que hacer @igna pasado por parametro el user, password, y el id que es el dni para verificar que exista el usuario y que sea correcto
}
async function logIn() { //necesito un appi que verifique que exista este usuario con este password @igna
    
    let id = ui.getId()
    let user = ui.getUser()
    let password = ui.getPassword()

    if (await fetchCheckUser(id, user, password)) {
        idLogged = id
    }

}

function logOut(){

    idLogged = 0
    location.href = "./index.html"
    
}