// Función para crear una nueva encuesta sobre Marcas de Zapatos
let encuestasZapatos = [
    //   {
    //     pregunta:"Marca favorita",
    //     opcion1: "Urco",
    //     opcion2: "Adidas"
    //     },
    //     {
    //         pregunta:"modelo favorito",
    //         opcion1: "kansas",
    //         opcion2: "duna"
    //         }

];

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

function mostrarResultadosEncuesta(){

    encuestasZapatos.forEach(zapato => { console.log (`Resultado pregunta ${zapato.pregunta}: ${zapato.votoElegido}`)
        
    });
}

function guardarResultados(){
    encuestaGuardada = encuestasZapatos.map(zapato =>{ 
      return {pregunta: zapato.pregunta, votoElegido: zapato.votoElegido}


    } )


}
let encuestaGuardada = []

crearEncuestaZapatos();




