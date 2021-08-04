var numero1= -1;
var numero2= -1;
var activoIgual = false;

var activoOperacion= false;
var tipoOperacion= '';


var operacionesRealizadas = [];

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

    if(guardarNumero1){
        this.guardarOperacion(this.numero1,this.numero2, this.tipoOperacion)
       
        switch(this.tipoOperacion){
            case '+':
                this.numero1 = this.sumar(this.numero1, this.numero2);
            break;
            case '-':
                this.numero1 = this.resta(this.numero1, this.numero2);
            break; 
            case '*':
                this.numero1 = this.multiplicacion(this.numero1, this.numero2);
            break; 
            case '/':
                this.numero1 =this.division(this.numero1, this.numero2);
            break;
            case '^':
                this.numero1 =this.potencia(this.numero1, this.numero2); 
            break;
            case 'raizCuadrada':
                this.numero1 =this.raizCuadrada(this.numero1, this.numero2);
            break;
        }
        if(this.numero1==NaN){
            alert(`Error Variable con valor ${this.numero1}`);
        }else{
            this.mostrarDisplay(this.numero1);
        }
       
    }
 
}

/**
 * guardar la operacion que se esta realiando
 * @param {float} numero1 
 * @param {float} numero2 
 * @param {string} tipoOperacion 
 */
function guardarOperacion(num1,num2,tipoOpe){
    this.operacionesRealizadas.push({numero1:num1,numero2:num2,tipoOperacion:tipoOpe});
}

/**
 * Encargada de realizar el codigo HTML, y mostrar el historial de operaciones
 */
function imprimirOperaciones(){
    document.getElementById("historico").innerHTML = '';

    let ul = document.createElement("ul");

    this.operacionesRealizadas.forEach(element => {
        let li =document.createElement("li");
        li.innerText = `${element.numero1} ${element.tipoOperacion} ${element.mumero2}`;
        ul.appendChild(li); 
    });
}

document.getElementById("historico").appendChild(ul);