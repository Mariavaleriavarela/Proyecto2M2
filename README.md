![pm2](https://github.com/Mariavaleriavarela/Proyecto2M2/assets/162743143/4aa002a8-3123-49fc-8316-d2055b3693d3)

# Proyecto2M2 sistema de Votación en JavaScript
Hola!! Bienvenidos a este proyecto 2 que tiene como objetivo desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML.


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


Trabajo en una marca de calzado, y me entusiasma la idea de diseñar encuestas relacionadas con marcas, modelos, tallas, colores y otros aspectos relevantes de los zapatos.

A continuación, se detallan los pasos a seguir para comprenderlo:

## 1. PASO A PASO:
### Paso 1: Lo primero que hice fue crear la funcion que permita al usuario crear la encuesta:

  ```scss
  function crearEncuestaZapatos() {
    
    for (let i = 0; i < 8; i++) {
        let preguntaEncuesta = {
            pregunta:"",
            opcion1: "",
            opcion2: ""
            }
        preguntaEncuesta.pregunta = prompt("Ingrese la pregunta número:"+ (i + 1) + "sobre zapatos")
        preguntaEncuesta.opcion1= prompt("Ingresa opcion 1");
        preguntaEncuesta.opcion2= prompt("Ingresa opcion 2");
    
        encuestasZapatos.push (preguntaEncuesta)
        }
                }
  ```

- Se declara una función llamada crearEncuestaZapatos().
- Dentro de la función, se inicia un bucle for que se ejecutará 8 veces, ya que nos pidieron crear al menos 8 preguntas para la encuesta.
- En cada iteración del bucle, se crea un objeto llamado preguntaEncuesta, que contiene tres propiedades: pregunta, opcion1 y opcion2.
- Se solicita al usuario que ingrese la pregunta sobre zapatos usando el método prompt() y se guarda en la propiedad pregunta del objeto preguntaEncuesta.
- Se solicita al usuario que ingrese dos opciones de respuesta para la pregunta, las cuales se guardan en las propiedades opcion1 y opcion2 respectivamente.
- Una vez que se han ingresado la pregunta y las opciones de respuesta, el objeto preguntaEncuesta se agrega al array encuestasZapatos utilizando el método push().
- La función termina después de que se completan las 8 iteraciones del bucle y se han creado todas las preguntas para la encuesta.
  
En resumen, esta función permite al usuario crear una encuesta sobre zapatos mediante la entrada de preguntas y opciones de respuesta, y luego almacena estas encuestas en un array llamado encuestasZapatos.

  
### Paso 2: Creé una función que permite que el usuario pueda votar:

```scss
function votarEncuestaZapatos(encuesta) {
    // Mostrar la pregunta de la encuesta
    for (let i = 0; i < (encuestasZapatos.length); i++) {
    console.log(encuestasZapatos[i].pregunta);

    // Mostrar las opciones disponibles
    console.log("1. " + encuestasZapatos[i].opcion1);
    console.log("2. " + encuestasZapatos[i].opcion2);

    // Pedir al usuario que ingrese su voto
    const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2):");

    // Verificar si el voto es válido
    if (voto === "1" || voto === "2") {
        console.log("¡Gracias por votar!");
        encuestasZapatos[i].votoElegido = encuestasZapatos[i]["opcion"+voto]
    } else {
        console.log("Voto inválido. Por favor, ingrese 1 o 2.");
    }
  }
}
  ```

- Dentro de la función, hay un bucle for que recorre todas las encuestas almacenadas en la variable encuestasZapatos. Este bucle itera desde i = 0 hasta i < encuestasZapatos.length, lo que significa que se recorrerán todas las encuestas una por una.

- Dentro del bucle, primero se muestra la pregunta de la encuesta actual utilizando console.log(encuestasZapatos[i].pregunta). Esto imprimirá en la consola la pregunta de la encuesta actual.

- Luego, se muestran las opciones disponibles para esa pregunta utilizando console.log("1. " + encuestasZapatos[i].opcion1) y console.log("2. " + encuestasZapatos[i].opcion2). Estas líneas mostrarán las dos opciones de respuesta disponibles para la pregunta actual.

- Después, se solicita al usuario que ingrese su voto mediante const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2):"). El valor ingresado por el usuario se almacenará en la variable voto.

- Se verifica si el voto ingresado es válido. Si el voto es "1" o "2", se imprime "¡Gracias por votar!" y se asigna la opción elegida a la propiedad votoElegido de la encuesta actual. Esto se hace con la línea encuestasZapatos[i].votoElegido = encuestasZapatos[i]["opcion"+voto].

- Si el voto no es válido (no es "1" ni "2"), se imprime "Voto inválido. Por favor, ingrese 1 o 2.".

 En resumen, esta función permite a los usuarios votar en todas las encuestas almacenadas en encuestasZapatos, mostrando cada pregunta y sus opciones de respuesta, y registrando el voto del usuario en la encuesta correspondiente.


##  Paso 3: Creé una función para mostrar los resultados:

```scss
function mostrarResultadosEncuesta(){

    encuestasZapatos.forEach(zapato => { console.log (`Resultado pregunta ${zapato.pregunta}: ${zapato.votoElegido}`)
        
    });
}

  ```
Esta función muestra los resultados de las encuestas. Utilice el método forEach para recorrer todas las encuestas en encuestasZapatos y muestrar la pregunta junto con la opción elegida por cada votante.

##  Paso 4: Creé una función que guarda los resultados:

```scss
function guardarResultados(){
    encuestaGuardada = encuestasZapatos.map(zapato =>{ 
      return {pregunta: zapato.pregunta, votoElegido: zapato.votoElegido}


    } )


}
let encuestaGuardada = []

  ```
Esta función guarda los resultados de las encuestas en una nueva variable llamada encuestaGuardada. utilice el método map para transformar cada encuesta en un objeto que contiene la pregunta y la opción elegida, y luego asignar este objeto a encuestaGuardada.

Finalmente llame a la funcion "crearEncuestaZapatos() para iniciar el proceso de creación de encuestas.

```scss 
  crearEncuestaZapatos();
 ```
![Banner Horizontal en Crema Naranja Verde estilo Orgánico Delicado](https://github.com/Mariavaleriavarela/Proyecto2M2/assets/162743143/dd69bb49-d92c-426e-aa38-196b3c9d047e)




