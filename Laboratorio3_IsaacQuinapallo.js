// Laboratorio 3
// De: Isaac Quinapallo

//VARIABLES
var tiempoRestante = 120
let jugador1 = "FireBoy"
let jugador2 = "WaterGirl"
const cantidadGemas = 32

//STRINGS
let mensajeVictoria = "¡Felicidades! Has completado el nivel."
let instrucciones = "Usa A,W,D para mover a WaterGirl y las flechas para FireBoy."

//TEMPLATE STRINGS
console.log(`Tiempo restante: ${tiempoRestante} segundos`)
console.log(`${jugador1} y ${jugador2} deben colaborar para avanzar.`)

//ES6
let tiempoRestanteStr = "120"
console.log(+tiempoRestanteStr + 30);

//Operador Ternario
tiempoRestante <= 0 ? console.log("¡Tiempo agotado!") : console.log("Sigue jugando!");

//Valores Falsy y Truthy
let jugadorActivo = null;
!jugadorActivo ? console.log("Selecciona un jugador") : console.log("Jugador activo");

//Loops
const niveles = ["Nivel 1", "Nivel 2", "Nivel 3"];
niveles.forEach(nivel => {
    console.log(nivel);
});

//Posibles funciones
function iniciarJuego() {
    console.log("¡El juego ha comenzado!")
}
iniciarJuego();

const mostrarGemas = function(cantidad) {
    console.log(`Has recolectado ${cantidad} gemas.`);
}
mostrarGemas(cantidadGemas);

//Posibles Objetos
const jugador = {
    nombre: "FireBoy",
    vidas: 3,
    poder: "Fuego",
    recolectarGema: function() {
        console.log(`${this.nombre} ha recolectado una Gema!`)
    }
};

