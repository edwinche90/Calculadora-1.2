
/**
 * obtener codigo de tecla presionada
 * @param {*} key 
 */
 function getkeyCode(key){   
    switch (key.keyCode) {

        case 107 :  //suma
            //alert ("suma")
            this.guardarNumero1('suma')
            break;
            
        case 109: //resta
            //alert ("resta");
            this.guardarNumero1('resta')
            break;

        case 106: //multiplicacion
            //alert ("multiplicacion");
            this.guardarNumero1('multiplicacion')
            break;

        case 111: //division 
            //alert ("division");
            this.guardarNumero1('division')
            break;

        case 186: //potencia
            this.guardarNumero1('potencia')
            break;  
            
        case 53: //raiz cuadrada
            this.guardarNumero1('raizCuadrada')
        break;     

        case 13: //igual
            //alert ("igual");
            this.generarResultado()
            break;               
        case 8 : //resta un numero
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
    console.log(key);
   
    if (key.keyCode >= 65 && key.keyCode <= 90){
        alert(`no se permite valores, no numericos.\n valor ingresado: ${key.key}`);
       this.eliminarCaracterDisplay();
    }
}

window.addEventListener("keyup", getkeyCode,false);
