// Calculador de cuotas


let precio = 1;
let cuotas = 0;
let resultado = precio / cuotas;
// --------------------Funciones
function cotizador (precio, cuotas){
    precio = parseInt(prompt("Indique el monto del articulo"));
    cuotas = parseInt(prompt("¿Cuántas cuotas queres hacer? el máximo es 12"));
    resultado = precio/cuotas;
    calculadorCuotas(precio, cuotas);
}
function calculadorCuotas(precio, cuotas) {
    if (precio <= 0 || cuotas < 1 || cuotas > 12) {
        alert(`Por favor ingrese valores validos`);
        cotizador(precio/cuotas);
    } else if (precio > 0 && cuotas >= 1 && cuotas <= 12) {
        alert(`El valor de la cuota es ${resultado}`);
    }
}
cotizador (precio, cuotas);


let pregunta = 0;
let afirmativo = 1;
let negativo = 2

while (resultado != 0) {
    pregunta= Number(prompt("Querés calcular otro valor u otras cuotas? opcion 1 es si, opcion 2 es no"));
    if (pregunta === afirmativo) {
        cotizador(precio, cuotas);
    } else if(pregunta === negativo) {
    alert(`Gracias por su consulta`);
    break;
} else if (pregunta != afirmativo && pregunta!=negativo) {
    alert(`Por favor, ingrese una opcion valida`);
}
}







