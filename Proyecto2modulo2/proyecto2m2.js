// Objeto para almacenar encuestas y votos
let encuestas = [];

// Función para crear una nueva encuesta
function crearEncuesta() {
    let nuevaEncuesta = {
        preguntas: []
    };

    for (let i = 0; i < 8; i++) {
        let pregunta = prompt("Ingrese la pregunta " + (i + 1) + ":");
        let opcion1 = prompt("Ingrese la opción 1:");
        let opcion2 = prompt("Ingrese la opción 2:");

        nuevaEncuesta.preguntas.push({
            pregunta: pregunta,
            opciones: [opcion1, opcion2],
            votos: [0, 0] // Inicializar votos en 0 para cada opción
        });
    }

    encuestas.push(nuevaEncuesta);
}

// Función para votar en una encuesta
function votarEncuesta(encuestaIndex) {
    let encuesta = encuestas[encuestaIndex];

    encuesta.preguntas.forEach((pregunta, index) => {
        console.log("Pregunta #" + (index + 1) + ": " + pregunta.pregunta); // Mostrar la pregunta y las opciones
        pregunta.opciones.forEach((opcion, i) => {
            console.log((i + 1) + ". " + opcion); // Mostrar las opciones
        });

        const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2) para la pregunta: '" + pregunta.pregunta + "'"); // Pedir el voto

        if (voto === "1" || voto === "2") {
            console.log("¡Gracias por votar!");
            pregunta.votos[parseInt(voto) - 1]++;
        } else {
            console.log("Voto inválido. Por favor, ingrese 1 o 2.");
        }
    });
}

// Función para mostrar los resultados de una encuesta
function mostrarResultadosEncuesta(encuestaIndex) {
    let encuesta = encuestas[encuestaIndex];

    console.log("Resultados de la encuesta:");
    encuesta.preguntas.forEach((pregunta, index) => {
        console.log("Pregunta #" + (index + 1) + ": " + pregunta.pregunta);
        pregunta.opciones.forEach((opcion, i) => {
            console.log("  Opción " + (i + 1) + " (" + opcion + "): " + pregunta.votos[i] + " votos");
        });
    });
}

// Crear una nueva encuesta
crearEncuesta();

// Votar en la primera encuesta
votarEncuesta(0);

// Mostrar resultados de la primera encuesta
mostrarResultadosEncuesta(0);




