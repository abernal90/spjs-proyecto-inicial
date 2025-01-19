let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while(numeroUsuario != numeroSecreto){
    
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));

    console.log(numeroUsuario);

    /*
    Este bloque realiza la comparación
    */

    if (numeroUsuario == numeroSecreto) {
        // la condición se cumple
        alert(`Acertaste, el numero es: ${numeroUsuario}, Lo isiste en ${intentos} ${palabraVeces}`);
    } else{
        // la condición no se cumple
        
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        intentos++;
        palabraVeces = 'veces';
    }

}
