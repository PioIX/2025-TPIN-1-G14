async function llenarScore() {

    localStorage.getItem("score")

    ui.setFinalScore(parseInt(localStorage.getItem("score")));

    let datos = {
        score: parseInt(localStorage.getItem("score")),
        idLogged: parseInt(localStorage.getItem("idLogged")),
    }
    
    let resultado = await fetch('http://localhost:4000/puntaje', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })

    let response = await resultado.json();
    console.log(response);
    return response.res

}