![pm2](https://github.com/Mariavaleriavarela/Proyecto2M2/assets/162743143/4aa002a8-3123-49fc-8316-d2055b3693d3)

# Proyecto2M2 sistema de Votación en JavaScript
Hola!! Bienvenidos a este proyecto 2 que tiene como objetivo desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML.

A continuación, se detallan los pasos a seguir para comprenderlo:

## EJERCICIO:
El objetivo principal de este proyecto es construir un programa en JavaScript que fortalezca las siguientes habilidades y conocimientos:

- Aplicación de conceptos básicos de programación en JavaScript.
- Uso de variables, constantes, operadores aritméticos y de comparación.
- Implementación de control de flujo mediante condiciones y bucles.
- Manipulación de estructuras de datos, como objetos y arrays.
- Uso de funciones, funciones de flecha y funciones anónimas.
- Implementación de programación orientada a objetos (POO) o programación funcional (PF).
- Uso de Git como sistema de control de versiones y colaborar en GitHub.

![Banner Horizontal en Crema Naranja Verde estilo Orgánico Delicado](https://github.com/Mariavaleriavarela/Proyecto2M2/assets/162743143/bf1fc960-32a0-4574-8415-676dae876199)

### 1. PASO A PASO:
- Paso 1: Lo primero que tenemos que hacer es crear la primera funcion que permita al usuario crear la encuesta:

  ```scss
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
  ```
Esta función permite al usuario crear una nueva encuesta ingresando preguntas y opciones de respuesta para cada una. Utiliza un bucle while para asegurarse de que se ingresen al menos 8 preguntas con sus respectivas opciones de respuesta antes de crear la encuesta. Si alguna pregunta u opción de respuesta no se completa, se muestra una alerta y se solicita nuevamente.

  
-  Paso 2: lo segundo que Tenemos que hacer es crear la función que permita al usuario votar:

```scss
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
  ```
Esta función toma la encuesta creada y las respuestas de votos ingresada por los usuarios. Utiliza el método "map" para iterar sobre cada pregunta de la encuesta y actualizar los votos correspondientes según las respuestas de voto recibidas.


-  Paso 3: lo tercero que Tenemos que hacer es crear la función que permita mostrar los resultados:

```scss
  function mostrarResultadosEncuesta(encuesta) {
    console.log("Resultados de la encuesta:");
    encuesta.forEach((pregunta, index) => {
        console.log("Pregunta #" + (index + 1) + ": " + pregunta.pregunta);
        pregunta.opciones.forEach((opcion, i) => {
            console.log("  Opción " + (i + 1) + " (" + opcion + "): " + pregunta.votos[i] + " votos");
        });
    });
}

  ```
Esta función muestra los resultados de la encuesta, incluyendo el número de votos recibidos para cada opción de respuesta de cada pregunta. Utiliza un bucle "forEach" para recorrer cada pregunta de la encuesta y mostrar los detalles de las opciones y los votos correspondientes.


  
  
