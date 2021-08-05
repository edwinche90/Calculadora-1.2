/**
 * Limpiar el Display
 */
 function limpiarDisplay() {  
    document.getElementById("display").value = '';
 }

 function mostrarDisplay(valor){
    document.getElementById("display").value = valor;

 }

 /**no cambia es variable LOCAL
 * esta funcion se encarga de eliminar la ultima entrada de teclado al display
 */
function eliminarCaracterDisplay(){
   let valorDisplay =document.getElementById("display").value;

   let arrayDisplay = Array.from (valorDisplay);
       arrayDisplay.pop();
       valorDisplay = arrayDisplay.join('');

   this.mostrarDisplay(valorDisplay)      
}


/**
 * obterner valor Display
 * @returns string con valor de display
 */
function obtenerValorDisplay(){
   return document.getElementById ("display").value;
}

