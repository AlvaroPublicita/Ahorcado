'use strict';

let palabrita;
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
const btn = id('jugar');
const imagen = id( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );

function id( str ){
    return document.getElementById( str );
}

function obtener_random( num_min, num_max ){
    const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
    const valor_al_azar = Math.floor( Math.random( ) * amplitud_valores ) + num_min; /* 5 - 15 = 10 + 5 */
    return valor_al_azar;
}

/* click en iniciar juego */
btn.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = './CSS/img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `./CSS/img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        id('resultado').innerHTML = "GANASTE!! WIIIIII";
        game_over( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}



/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}


game_over( );