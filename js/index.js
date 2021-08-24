
/**
 * obtener codigo de tecla presionada
 * @param {*} key 
 */
 function getkeyCode(key){   
    switch (key.key) {

        case '+' :  //suma
            this.guardarNumero1(key.key);
            break;
        case '-': //resta
            this.guardarNumero1(key.key);
            break;
        case '*': //multiplicacion
            this.guardarNumero1(key.key);
            break;
        case '/': //division 
            this.guardarNumero1(key.key);
            break;
        case '^': //potencia
            this.guardarNumero1(key.key);
            break;     
        case 'Enter': //igual
            this.generarResultado();
            break;  
        case 'NumpadEnter': //igual
            this.generarResultado();
            break;                
        case 'Backspace': //resta un numero
            break;  
        default: //validar numero
            this.validarNumero(key);
            break;                   
    }
}

/**
 * Esta funcion solo valida que el key sea un numero valido y lo muestra en el display
 * @param {string} key 
 */
function validarNumero(key) {
    switch(key.key){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case 'Shift':
            break;
        default:
                                                                            
            break;
    }
   
}

function ValorNoValido(key){

    if (key.key >= 65 && key.key <= 90){
        alert(`no se permite valores, no numericos.\n valor ingresado: ${key.key}`);
       this.eliminarCaracterDisplay();
    }
}

window.addEventListener("keyup", getkeyCode,false);
