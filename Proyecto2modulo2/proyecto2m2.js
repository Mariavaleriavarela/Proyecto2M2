// Función para crear una nueva encuesta
function crearEncuesta() {
    let encuesta = [];
    let preguntaCount = 0;

    while (preguntaCount < 8) {
        const pregunta = prompt("Ingrese la pregunta " + (preguntaCount + 1) + ":");
        const opcion1 = prompt("Ingrese la opción 1:");
        const opcion2 = prompt("Ingrese la opción 2:");

        if (pregunta && opcion1 && opcion2) {
            encuesta.push({
                pregunta: pregunta,
                opciones: [opcion1, opcion2],
                votos: [0, 0] // Inicializar votos en 0 para cada opción
            });
            preguntaCount++;
        } else {
            alert("Por favor, complete todas las preguntas y opciones de respuesta.");
        }
    }

    return encuesta;
}

// Función para votar en una encuesta
function votarEncuesta(encuesta, votoRespuestas) {
    return encuesta.map((pregunta, index) => {
        const voto = votoRespuestas[index];
        if (voto === "1" || voto === "2") {
            return {
                ...pregunta,
                votos: pregunta.votos.map((votoCount, i) => {
                    return i === parseInt(voto) - 1 ? votoCount + 1 : votoCount;
                })
            };
        } else {
            return pregunta;
        }
    });
}

// Función para mostrar los resultados de una encuesta
function mostrarResultadosEncuesta(encuesta) {
    console.log("Resultados de la encuesta:");
    encuesta.forEach((pregunta, index) => {
        console.log("Pregunta #" + (index + 1) + ": " + pregunta.pregunta);
        pregunta.opciones.forEach((opcion, i) => {
            console.log("  Opción " + (i + 1) + " (" + opcion + "): " + pregunta.votos[i] + " votos");
        });
    });
}

// Crear una nueva encuesta
const encuesta = crearEncuesta();

// Votar en la encuesta
const votoRespuestas = encuesta.map(pregunta => {
    return prompt("Ingrese el número de la opción que prefiera (1 o 2) para la pregunta: '" + pregunta.pregunta + "'");
});
const encuestaConVotos = votarEncuesta(encuesta, votoRespuestas);

// Mostrar resultados de la encuesta
mostrarResultadosEncuesta(encuestaConVotos);




