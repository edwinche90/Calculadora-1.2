var numero1= -1;
var numero2= -1;
var activoIgual = false;
var activoOperacion= false;
var tipoOperacion= '';
var operacionesRealizadas = [];

/** 
 * Esta funcion permite validar que tipo de operacion quiere ralizar y guardo el valor en la variable numero1
 * 
 * @param {string} tipoOperacion -> puede ser suma,resta, multiplicacion, division.
*/
function guardarNumero1(tipoOperacion) {
    this.definirTipoOperacion(tipoOperacion); 
    this.almacenarTipoOperacion = tipoOperacion;
    this.eliminarCaracterDisplay();
    
    if(this.numero1 == -1 && this.obtenerValorDisplay() != ''){
        this.numero1 = parseFloat(this.obtenerValorDisplay());
        this.definirTipoOperacion(this.almacenarTipoOperacion);
    } 

    this.limpiarDisplay();

} 

/**
 * Esta funcion almacenara el valor del display en la variable numero2
 */
 function guardarNumero2(){

    if(this.obtenerValorDisplay() != ''){
        this.numero2 = parseFloat(this.obtenerValorDisplay());

    
    this.limpiarDisplay();
}
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


    if(this.numero1 != -1 && this.numero2 != -1){ 
        let result = 0;  //la utilizo para almacenar resultado  y mostrar resultado

        switch(this.tipoOperacion){
            case '+':
                result =this.sumar(this.numero1, this.numero2);
            break;
            case '-':
                result =this.resta(this.numero1, this.numero2);
            break; 
            case '*':
                result =this.multiplicacion(this.numero1, this.numero2);
            break; 
            case '/':
                result =this.division(this.numero1, this.numero2);
            break;
            case '^':
                result =this.potencia(this.numero1, this.numero2); 
            break;
          
        }
        if(result== NaN){
            alert(`Error Variable con valor ${result}`);
        }else{
            this.mostrarDisplay(result);
        }
        this.guardarOperacion(this.numero1,this.numero2,this.tipoOperacion,result);
        this.numero1 = result;  //para que se quede almacenada la variavle uno como a venido traendolo
    }
 
}

/**
 * guardar la operacion que se esta realiando
 * @param {float} numero1 
 * @param {float} numero2 
 * @param {string} tipoOperacion 
 * @param {float} result
 */
function guardarOperacion(num1,num2,tipoOpe,result){
    this.operacionesRealizadas.push({numero1:num1,numero2:num2,tipoOperacion:tipoOpe,resultado:result});
}

/**
 * Encargada de realizar el codigo HTML, y mostrar el historial de operaciones
 */
function imprimirOperaciones(){
    document.getElementById("historico").innerHTML = '';

    let ul = document.createElement("ul");

    this.operacionesRealizadas.forEach(element => {
        let li =document.createElement("li");
        li.innerText = `${element.numero1} ${element.tipoOperacion} ${element.numero2} = ${element.resultado}`;
        ul.appendChild(li); 
    });

    document.getElementById("historico").appendChild(ul);
}