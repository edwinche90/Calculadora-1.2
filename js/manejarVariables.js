var numero1= -1;
var numero2= -1;
var activoIgual = false;

var activoOperacion= false;
var tipoOperacion= '';

/** 
 * Esta funcion permite validar que tipo de operacion quiere ralizar y guardo el valor en la variable numero1
 * 
 * @param {string} tipoOperacion -> puede ser suma, multiplicacion, division.
*/
function guardarNumero1(tipoOperacion) {
    
    this.definirTipoOperacion(tipoOperacion)
    this.eliminarCaracterDisplay();

    if(this.numero1 == -1){
        this.numero1 = parseFloat(this.obtenerValorDisplay());
    } 

    this.limpiarDisplay();

} 


/**
 * Esta funcion almacenara el valor del display en la variable numero2
 */
 function guardarNumero2(){
    this.numero2 = parseFloat(this.obtenerValorDisplay());
    this.limpiarDisplay();
}


/**
 * funcion activa el realizar una operacion y guarda el tipo de operacion
 * @param {*} tipoOperacion 
 */
 function definirTipoOperacion(tipoOperacion){
    this.activoOperacion= true;
    this.tipoOperacion = tipoOperacion;
}


/**
 * funcion limpia tipo de operacion y espera la siguinete operacion a realizar
 */
 function limpiarTipoOperacion(){
    this.activoOperacion =false;
    this.tipoOperacion = '';

}

/**
 * genera el resultado y lo muestra en el display
 */
 function generarResultado() {
    this.guardarNumero2();

    //BUG muestra NaN
    //FIXME error
    console.log(this.numero1, this.numero2);

    if(guardarNumero1){
        switch(this.tipoOperacion){
            //TODO quitar console log
            case 'suma':
                this.numero1 = this. sumar(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break;
            case 'resta':
                this.numero1 = resta(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break; 
            case 'multiplicacion':
                this.numero1 = multiplicacion(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break; 
            case 'division':
                this.numero1 =this.division(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break;
            case 'potencia':
                this.numero1 =this.potencia(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break;
            case 'raizCuadrada':
                this.numero1 =this.raizCuadrada(this.numero1, this.numero2);
                this.mostrarDisplay(this.numero1);
            break;
        }
    }
 
}
