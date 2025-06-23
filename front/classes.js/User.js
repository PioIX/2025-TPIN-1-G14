class User {
    constructor(name, lastName, password, username, id) {
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.username = username;
        this.id = id;
         this.puntajeTotal = 0 ;//---> guarda puntaje nuevo cuando es mayor al que ya existe
        this.puntajeActual = 0 ;//---> se reinicia cada vez que finaliza la partida
    }
}
const users = []
