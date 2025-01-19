// 1.- Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana

let diaUsuario = prompt("Me podria indicar el día de la semana:");

// declarar valores de fin de semana
let finSemana = ["sabado","domingo"];

// Eliminar acentos del dia del usuario
diaUsuario = diaUsuario.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

// Pasar dia del usuario a texto en minuscula
diaUsuario = diaUsuario.toLowerCase();

if(finSemana.includes(diaUsuario)){
    alert("¡Buen fin de semana!");
} else{
    alert("¡Buena semana!");
}

// 2.-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroUsuario =  parseInt(prompt("Ingresa un numero:"));
if(numeroUsuario < 0){
    alert("El numero es negativo");
} else if(numeroUsuario > 0){
    alert("El numero es positivo");
}else{
    alert("Ingreasa un numero diferente de 0");
}

//3.- Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacionUsuario =  parseInt(prompt("Ingresa la puntuación para juego:"));
if(puntuacionUsuario >= 100){
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

//4.-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoUSuario = 500;
alert(`Estimado usuario, el saldo de su cuenta es de $${saldoUSuario}`);

//5.-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt("Ingresa tu nombre completo:")
alert(`Bienvenido a Alura ${nombreUsuario}`);

// Comentarios multi linea
/*
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

/*
 Este bloque realiza la comparación
*/
/*
if (numeroUsuario == numeroSecreto) {
    // la condición se cumple
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else{
    // la condición no se cumple
    alert("Lo siento, no acertaste el número");
}
*/