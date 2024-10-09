// Laboratorio 3
// De: Isaac Quinapallo

// VARIABLES
var tiempoRestante = 120 // Variable global que almacena el tiempo restante en segundos
let jugador1 = "FireBoy" // Variable de bloque que representa al primer jugador
let jugador2 = "WaterGirl" // Variable de bloque que representa al segundo jugador
const cantidadGemas = 32 // Constante que define el número total de gemas disponibles

// STRINGS
let mensajeVictoria = "¡Felicidades! Has completado el nivel." // Mensaje de victoria al completar el nivel
let instrucciones = "Usa A,W,D para mover a WaterGirl y las flechas para FireBoy." // Instrucciones para los jugadores

// TEMPLATE STRINGS
console.log(`Tiempo restante: ${tiempoRestante} segundos`) // Muestra el tiempo restante utilizando template strings
console.log(`${jugador1} y ${jugador2} deben colaborar para avanzar.`) // Mensaje de colaboración entre jugadores

// ES6
let tiempoRestanteStr = "120" // Cadena que representa el tiempo restante
console.log(+tiempoRestanteStr + 30); // Convierte la cadena a número y suma 30

// Operador Ternario
tiempoRestante <= 0 ? console.log("¡Tiempo agotado!") : console.log("Sigue jugando!"); // Mensaje condicional según el tiempo restante

// Valores Falsy y Truthy
let jugadorActivo = null; // Variable que puede ser null (falsy)
!jugadorActivo ? console.log("Selecciona un jugador") : console.log("Jugador activo"); // Mensaje dependiendo del valor de jugadorActivo

// Loops
const niveles = ["Nivel 1", "Nivel 2", "Nivel 3"]; // Array de niveles
niveles.forEach(nivel => { // Itera sobre cada nivel
    console.log(nivel); // Muestra el nombre de cada nivel
});

// Posibles funciones
function iniciarJuego() {
    console.log("¡El juego ha comenzado!") // Función para iniciar el juego
}
iniciarJuego(); // Llama a la función para comenzar el juego

const mostrarGemas = function(cantidad) { // Función para mostrar la cantidad de gemas recolectadas
    console.log(`Has recolectado ${cantidad} gemas.`); //Mensaje que muestra la cantidad de gemas
}
mostrarGemas(cantidadGemas); // Llama a la función pasando la cantidad de gemas

// Posibles Objetos
const jugador = { // Objeto que representa un jugador
    nombre: "FireBoy", // Nombre del jugador
    vidas: 3, // Cantidad de vidas del jugador
    poder: "Fuego", // Poder especial del jugador
    recolectarGema: function() { // Método para recolectar gemas
        console.log(`${this.nombre} ha recolectado una Gema!`) // Mensaje que indica la recolección de una gema
    }
};
