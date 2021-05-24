var valores = [true, 5, false, "hola", "adios", 2];

var strings = valores.filter((elemento) => {
    return typeof(elemento) === 'string';
});

var mayor;

strings.forEach( (elemento) => {
    if( mayor ){
        if ( elemento.length > mayor.length ){
            mayor = elemento;
        }
    }
    else {
        mayor = elemento;
    }
} );

alert("Cadena mayor: "+mayor);


var valor1 = valores[0];
var valor2 = valores[2];


var resultado = valor1 || valor2;
alert("Resultado true: "+resultado);

// Obtener un resultado FALSE
resultado = valor1 && valor2;
alert("Resultado false: "+resultado);



var num1 = valores[1];
var num2 = valores[5];

    var suma = num1 + num2;
        alert("Suma: "+suma);
    
    var resta = num1 - num2;
        alert("Resta: "+resta);
    
    var multiplicacion = num1 * num2;
        alert("Multiplicación: "+multiplicacion);
    
    var division = num1 / num2;
        alert("División: "+division);
    
    var modulo = num1 % num2;
        alert("Módulo: "+modulo);