'use strict';

let palabrita; //palabra a adivinar
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const palabras = [
    'HACKABOSS',     /* 0 */
    'JAVASCRIPT',    /* 1 */
    'PROGRAMACION',  /* 2 */
    'VARIABLE  ',    /* 3 */
    'FUNCION',       /* 4 */
    'OBJETO',        /* 5 */
    'CLASE',         /* 6 */
    'HERENCIA',      /* 7 */
    'PROTOTIPO',     /* 8 */
    'ARRAY',         /* 9 */
    'STRING',        /* 10 */
    'BOOLEAN',       /* 11 */
    'NUMBER',        /* 12 */
    'NULL',          /* 13 */
    'METODO',        /* 14 */
    'BUCLE',         /* 15 */
    'CONDICIONAL',   /* 16 */
    'JSON',          /* 17 */
    'DOM',           /* 18 */
    'EVENTO',        /* 19 */
    'CALLBACK',      /* 20 */
    'PROMESA',       /* 21 */
    'ASYNC',         /* 22 */
    'AWAIT',         /* 23 */

];

const btn = id('jugar'); //document.getElementById( 'jugar' );
const imagen = id( 'imagen' ); //document.getElementById( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" ); //document.querySelectorAll( "#letras button" );

function id( str ){ //función para no escribir document.getElementById( ) todo el tiempo
    return document.getElementById( str ); //devuelve el elemento con el id que le pasamos por parámetro
}

function obtener_random( num_min, num_max ){ //función para obtener un número random entre dos valores
    const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (23 - 0)
    const valor_al_azar = Math.floor( Math.random( ) * amplitud_valores ) + num_min; //Math.floor( ) redondea para abajo, Math.random( ) devuelve un número entre 0 y 1
    return valor_al_azar; //devuelve el número random
}

/* click en iniciar juego */
btn.addEventListener('click', iniciar ); //cuando hago click en el botón, llamo a la función iniciar( )

function iniciar(event){ //función para iniciar el juego
    imagen.src = './'; //cambio la imagen del ahorcado
    btn.disabled = true; //deshabilito el botón de jugar
    cant_errores = 0; //reinicio la cantidad de errores
    cant_aciertos = 0;  //reinicio la cantidad de aciertos
    
    const parrafo = id( 'palabra_a_adivinar' ); //document.getElementById( 'palabra_a_adivinar' );
    parrafo.innerHTML = '';  //limpio el párrafo

    const cant_palabras = palabras.length; //cantidad de palabras en el array
    const valor_al_azar = obtener_random( 0, cant_palabras ); //obtengo un número random entre 0 y la cantidad de palabras

    palabrita = palabras[ valor_al_azar ]; //obtengo la palabra que está en la posición del número random
    console.log( palabrita ); //muestro la palabra en la consola
    const cant_letras = palabrita.length; //cantidad de letras de la palabra

    for( let i = 0; i < btn_letras.length ; i++ ){ //recorro todos los botones de letras
        btn_letras[ i ].disabled = false; //habilito todos los botones de letras
    }

    for( let i = 0; i < cant_letras; i++ ){ //recorro la cantidad de letras de la palabra
        const span = document.createElement( 'span' ); //creo un elemento span
        parrafo.appendChild( span ); //agrego el span al párrafo
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){ //recorro todos los botones de letras
    btn_letras[ i ].addEventListener( 'click', click_letras ); //cuando hago click en un botón de letras, llamo a la función click_letras( )
}

function click_letras(event){ //función para adivinar la letra
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' ); //document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; // el botón que se clickeó
    button.disabled = true; //deshabilito el botón que se clickeó

    const letra = button.innerHTML.toLowerCase( ); //obtengo la letra del botón que se clickeó
    const palabra = palabrita.toLowerCase( ); // la palabra a adivinar

    let acerto = false; //variable para saber si acerté o no
    for( let i = 0; i < palabra.length;  i++ ){ //recorro la palabra
        if( letra == palabra[i] ){ //si la letra que clickeé es igual a la letra de la palabra...
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra; //muestro la letra en el span correspondiente
            cant_aciertos++; //sumo un acierto
            acerto = true; //cambio la variable a true
        }
    }

    if( acerto == false ){ //si no acerté...
        cant_errores++; //sumo un error
        const source = `./CSS/img/svg/H${cant_errores}.png` ; //obtengo la ruta de la imagen
        imagen.src = source; //cambio la imagen
    }

    if( cant_errores == 7 ){ //si me equivoqué 7 veces...
        id('resultado').innerHTML ="LA IA HA GANADO LA PALABRA ERA " + palabrita;
        game_over( ); //llamo a la función game_over( )
    }else if( cant_aciertos == palabrita.length ){ //si acerté todas las letras...
        id('resultado').innerHTML = "HAS DERROTADO A LA IA"; //muestro el mensaje
        game_over( ); //llamo a la función game_over( )
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto ); //muestro en la consola si acerté o no
}

// función para mostrar el contador de aciertos y errores
// TODO no tengo claro como mostrarlos en pantalla

function mostrar_contador( ){ //función para mostrar el contador de errores y aciertos
    const errores = id( 'errores' ); //document.getElementById( 'errores' );
    const aciertos = id( 'aciertos' ); //document.getElementById( 'aciertos' );
    errores.innerHTML = cant_errores; //muestro la cantidad de errores
    aciertos.innerHTML = cant_aciertos; //muestro la cantidad de aciertos
}   


/* fin del juego */
function game_over( ){ //función para terminar el juego
    for( let i = 0; i < btn_letras.length ; i++ ){ //recorro todos los botones de letras
        btn_letras[ i ].disabled = true; //deshabilito todos los botones de letras
    }

    btn.disabled = false; //habilito el botón de jugar   
}

game_over( ); //llamo a la función game_over( ) para deshabilitar los botones de letras y habilitar el botón de jugar