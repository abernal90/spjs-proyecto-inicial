// Comentarios multi linea
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

/*
 Este bloque realiza la comparación
*/
if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
} else{
    alert("Lo siento, no acertaste el número");
}