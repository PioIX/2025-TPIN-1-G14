class UserInterface {
    constructor() {

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
    getFullName() {
        return document.getElementById("fullName").value;
    }

    /**
     * Modifica el nombre de usuario logueado presentado en pantalla.
     * @param {String} username Nombre del usuario logueado.
     */
    setUser(username) {
        document.getElementById("loggedUsername").textContent = `¡Bienvenido ${username}!`;
    }

    /**
     * Vacía el contenido de los inputs del login / registro.
     */
    clearLoginInputs() {
        document.getElementById("fullName").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
    }

    /**
     * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
     */
    changeScreen() {
        const notepad = document.getElementById("notepad");
        const loginForm = document.getElementById("loginForm");
        if (notepad.style.display !== "none") {
            notepad.style.display = "none";
            loginForm.style.display = "";
            this.clearAllNotes();
            this.clearSelect();
        }
        else {
            notepad.style.display = "";
            loginForm.style.display = "none";
        }
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
