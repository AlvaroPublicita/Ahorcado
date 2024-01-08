'use strict';

// Crea un juego de ahorcado en el que el usuario tenga que adivinar una palabra.
// El juego debe mostrar tantos guiones como letras tenga la palabra a adivinar.
// El usuario podrá ir introduciendo letras que crea que pueden estar en la palabra.
// Si la letra está en la palabra, se mostrará en lugar del guión correspondiente.
// Si la letra no está, se irá dibujando el ahorcado.
// El usuario tendrá 6 intentos para adivinar la palabra.
// Si adivina la palabra antes de que se le acaben los intentos, habrá ganado.
// Si se le acaban los intentos, habrá perdido.
// El juego debe tener al menos 25 palabras distintas para adivinar.
// El juego debe tener un sistema de pistas que el usuario pueda utilizar cuando quiera.
// El juego debe tener un sistema de puntuación que guarde las partidas ganadas y perdidas.

// VARIABLES

// Array de palabras realacionadas con programación

let palabras = ["javascript", "programacion", "ordenador", "teclado", "raton", "monitor", "pantalla", "internet", "tecnologia", "informatica", "desarrollo", "aplicacion", "aplicacion", "software", "hardware", "sistema", "operativo", "programador", "desarrollador", "desarrolladora", "informatico", "informatica", "tecnico", "tecnica", "tecnico", "array", "tecnologo", "tecnologa", "ingeniero", "ingeniera", "ingenieria", "informatica", "bucle", "ciclo", "condicional", "variable", "constante", "funcion", "metodo", "clase", "objeto", "propiedad", "atributo", "string", "constructor", "herencia", "encapsulamiento", "polimorfismo", "abstraccion", "programa", "orientada", "objetos", "algoritmo", "estructurada", "query", "funcional", "html", "logica", "dom", "imperativa", "variable", "declarativa", "web", "procedimental", "servidor", "expresion", "frontend", "backend", "base", "datos"];

// Variables de juego

let palabra = "";
let palabraOculta = "";
let letras = [];
let intentos = 6;
let pista = "";
let puntuacion = 0;
let ganadas = 0;
let perdidas = 0;
let aciertos = 0;
let fallos = 0;
let pistaUsada = false;
let letraUsada = false;
let juegoTerminado = false;

// Variables de elementos HTML

let divPista = document.getElementById("pista");
let divIntentos = document.getElementById("intentos");
let divPuntuacion = document.getElementById("puntuacion");
let divPalabra = document.getElementById("palabra");
let divLetras = document.getElementById("letras");
let divMensaje = document.getElementById("mensaje");
let divBoton = document.getElementById("boton");
let divAhorcado = document.getElementById("ahorcado");