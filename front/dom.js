class UserInterface {
    constructor() {

    }

    setImg1(nombreImg) {
        document.getElementById("img1").src = nombreImg
    }

    setTitle1(nombre) {
        document.getElementById("movieTitle1").innerHTML = nombre
    }

    getTitle1() {
        return document.getElementById("movieTitle1").innerHTML
    }

    
    setTitle2(nombre) {
        document.getElementById("movieTitle2").innerHTML = nombre
    }

    setRondas(rondas) {
        document.getElementById("round_num").innerHTML = rondas
    }

    setRanking(table){
        document.getElementById("tabla").innerHTML = table
    }
    setScore(score) {
        document.getElementById("score").innerHTML = score
    }

    getScore() {
        let score = document.getElementById("score").textContent
        return score;
    }

    setFinalScore(score) {
        document.getElementById("finalScore").innerHTML = score
    }


    getTitle2() {
        return document.getElementById("movieTitle2").innerHTML
    }

    setImg2(nombreImg) {
        document.getElementById("img2").src = nombreImg
    }
    /**
     * Obtiene el texto ingresado en el input "Usuario", sección "Login".
     * @returns String que contiene el nombre de usuario.
     */
    getUser() {
        return document.getElementById("username").value;
    }

    /**
     * Obtiene el texto ingresado en el input "Contraseña", sección "Login".
     * @returns String que contiene la contraseña ingresada por el usuario.
     */
    getPassword() {
        return document.getElementById("password").value;
    }

    /**
     * Obtiene el texto ingresado en el input "Nombre y apellido", sección "Login".
     * @returns String que contiene el nombre y apellido ingresados por el usuario.
     */
    getName() {
        return document.getElementById("name").value;
    }
    /**
    * Obtiene el texto ingresado en el input "Nombre y apellido", sección "Login".
    * @returns String que contiene el nombre y apellido ingresados por el usuario.
    */
    getLastName() {
        return document.getElementById("lastName").value;
    }


    getId() {
        return document.getElementById("id").value;
    }
    /**
     * Modifica el nombre de usuario logueado presentado en pantalla.
     * @param {String} username Nombre del usuario logueado.
    setUser(username) {
        document.getElementById("loggedUsername").textContent = `¡Bienvenido ${username}!`;
    }*/
    //IndexAdmin
    getTitulo() {
        return document.getElementById("titulo").value;
    }

    getIdPelicula() {
        return document.getElementById("id_pelicula").value;
    }

    getLink() {
        return document.getElementById("link").value;
    }

    getFecha() {
        return document.getElementById("fecha").value;
    }

    getIdUsuario() {
        return document.getElementById("idUsuario").value;
    }
    
    getIdPeliculaBorrar() {
        return document.getElementById("idPelicula").value
    }

    /**
     * Vacía el contenido de los inputs del login / registro.
     */
    clearLoginInputs() {
        document.getElementById("lastName").value = "";
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
    }

    clearInputs() {
        document.getElementById("id_pelicula").value = "";
        document.getElementById("idPelicula").value = "";
        document.getElementById("titulo").value = "";
        document.getElementById("idUsuario").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("link").value = "";
    }

    /**
     * Muestra el modal y le inserta los textos que se reciben como parámetros.
     * @param {String} title Título que se quiere mostrar en el modal.
     * @param {String} body Texto del cuerpo del modal.
     */
    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });

        modal.show();
    }
}

/**
 * Objeto para manejar la UI en este TP, provisto por los docentes Nico Facón y Mati Marchesi.
 */
const ui = new UserInterface();
