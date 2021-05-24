function fechactual(){

    /*Creamos objeto fecha para usar los GET()*/
    let fecha = new Date();

    /*Creamos vectores para los días de la semana.*/
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    /*Creamos vectores para los meses del año.*/
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        /*Colocamos el texto en un elemento texto_fecha.*/
        document.getElementById("texto_fecha").innerHTML = "<p>Hoy es "+ dias[fecha.getDay()] + 
            ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear() +"</p>";

        /*Colocamos el texto en un elemento texto_hora.*/
        document.getElementById("texto_hora").innerHTML = "<p>Son las "+ fecha.getHours() + ":" + fecha.getMinutes() +". </p>";
}



function diasdediferencia(fechaobtenida){

    /*Creamos una variable que obtenga la fecha.*/
    var fecha = new Date(fechaobtenida);
    
    /*ISNAN es una función que evalúa si una variable se puede convertir.*/
    if (isNaN(fecha)){

        /*Si no se puede convertir, se devuelve un FALSE.*/
        return false;
    } else{

        /*Si se puede convertir, se crea una variable DIFERENCIA.
        Obtiene la fehca actual y la resta a la fecha obtenida.*/
        var diferencia = new Date() - fecha;

        /*Se devuelve la diferencia y se divide entre los 86400000 que tiene un día */
        return parseInt(diferencia / 86400000);
    }

} 



function evaluarcadena(){
			
  /*Se guarda la cadena en una variable, obtenida a través de un PROMPT.*/
  var cadena = prompt("Introduce una cadena de texto:");

  /*La variable ESPACIO sirve para igualar los caracteres y comparar cual está vacío.*/
  var espacio = " ";

  /*La variable LONGITUD se encargará de almacenar la longitud de la cadena.*/
  var longitud = 0;

  /*La variable VECTOR sirve para recorrer la cadena por iteraciones.*/
  var vector = new Array();

  /*La variable POSICIÓN sirve para indicar la posición donde se encuentra.*/
  var posicion = 0;

    /*Convertimos la cadena de texto a un arreglo.*/
    if (cadena.length == 0){
      evaluarcadena();
      return;
    }
    
    /*Obtenemos la longitud de la cadena.*/
    for (var i in cadena) {
       longitud++;	
    }
    
    vector[posicion]="";
    for(var i = 0; i < longitud; i++) {
        if(cadena[i]!=espacio) {
            vector[posicion]+=cadena[i];
        } else {
            posicion++;
            vector[posicion]="";
          }	
    }
       
    /*Creamos una cadena sin espacios, pasamos los caracteres uno por uno y omitimos el espacio.*/
    var sinespacios = "";
      for(i in vector) {
        if(vector[i] != " ") {
          sinespacios += vector[i];
        }
      }
       
    /*Creamos una cadena que se encargará de guardar los primeros caracteres de la cadena que se ingresó.*/
    var espalindromo = " ";
      
      /*Obtenemos los caracteres de la cadena.*/
      var caracteres = sinespacios.split("");
      
      /*Obtenemos los caracteres de la caden de forma inversa.*/
      var caracteresinversos = sinespacios.split("").reverse();
      
      /*Creamos una variable con valor true.*/
      var cadena_palindromo = true;

        for(i in caracteres) {
          if(caracteres[i] == caracteresinversos[i]) {

            /*Es palíndromo.*/
            cadena_palindromo = true;
          } else {

            /*Ya no es palíndromo, tiene un caracter distinto.*/
            cadena_palindromo = false;
          }
        }
        
        if(cadena_palindromo == true) {

          /*Como es palíndromo, se indica.*/
          espalindromo += "Es un palíndromo";
        } else {

          /*Como no es palíndromo, se indica.*/
          espalindromo += "No es un palíndromo";
        }
     
  /*Se coloca el texto en el DIV contenido_contenedor.*/
  document.getElementById("contenido_contenedor").innerHTML = 
    "<p>"+ "La cadena de texto es : " + cadena + "." + 
      "<br><br>Número de palabras : " + vector.length+ 
      "<br>Primera palabra : " + vector[0] + 
      "<br>Última palabra : " + vector[vector.length-1] +
      "<br>Inversa : " + vector.reverse() + 
      "<br>Orden alfabético a - z: " + vector.sort() + 
      "<br>Orden alfabético z - a: " + vector.sort().reverse() + 
      "<br>" + espalindromo + 
    "</p>";
}


function DNI(){

    /*Creamos una arreglo de caracteres, que incluye todas las letras en orden conforme al DNI.*/
    var caracteres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    /*Se solicita la numeración del DNI.*/
    var numero = prompt("Introduce la numeración de tu DNI: ");

      /*Validamos que sea DNI, es TRUE.*/
      var esdni = true;

    /*Se solicita el caracter del DNI.*/
    var caracter = prompt("Introduce el caracter de tu DNI: ");

      /*Convertimos a mayúscula.*/
      caracter = caracter.toUpperCase();
  
    /*Verificamos que la numeración sea válida.*/
    if(numero < 0 || numero > 99999999) {
      
      /*Si no está en el rango, se  indica que no es válida.*/
      alert("La numeración no es válida."); 
    } else {

      /*Se obtiene el módulo para verificar que el caracter corresponda.*/
      var calculocaracter = caracteres[numero % 23];
      if(calculocaracter == caracter) {

        /*si el caracter corresponde, se indica y se muestra en el elemento VALOR.*/
        esdni = true;
        document.getElementById("valor").innerHTML=esdni + ": la numeración y caracter proporcionados son correctos.";
      } else {

        /*si el caracter no corresponde, se indica y se muestra en el elemento VALOR.*/
        esdni =  false;
        document.getElementById("valor").innerHTML= esdni + ": la numeración y caracter proporcionados no son correctos.";
      }
    }

    /* DNI DE PRUEBA: 30065089H */
}



function recorrerarbol(nodo){

    /*Si no es un nodo, no se obtiene nada.*/
    if(!nodo) {
        return 0;
    } else{
        /*Obtenenemos el tipo de nodo que es.*/

        /*Si es de TIPO 1, exponemos el nombre de ese nodo.*/
        if(nodo.nodeType==1){
            alert(nodo.nodeName)
        }

        /*Si es de TIPO 3, exponemos el contenido de ese nodo.*/
        if(nodo.nodeType==3){
            alert(nodo.nodeValue)
        }

        /*Se recuperan los hijos.*/
        var hijos = nodo.childNodes;

        for(var i = 0; i< hijos.length; i++){
            recorrerarbol(hijos[i]);
        }

        return 0;
    }
}



function realizarcambios(){

    /*Obtenemos los elementos H2.*/
    var encabezadoh2 = document.getElementsByTagName("h2");
    
    /*Se expone el número de elementos H2, se obtiene con LENGTH.*/
    document.getElementById("nelementos").innerHTML="<p>Número de elementos H2: " + encabezadoh2.length + "</p>"
    
    /*Se obtiene el valor del penúltimo H2, a la longitud se le restan 2 posiciones.*/
    var penultima = encabezadoh2[encabezadoh2.length - 2];
    
    /*Se expone el valor del penúltimo elemento H2.*/
    document.getElementById("penultimoelemento").innerHTML="<p>Contenido del penúltimo elemento H2: " + penultima.innerHTML + "</p>"


    /*CAMBIAR "DE" A H2.*/
    var nodo = document.createElement("h1");     

    /*AÑADIR EL TEXTO DE LA CABECERA H2.*/
    nodo.appendChild(document.createTextNode(penultima.innerHTML));
    penultima.parentNode.replaceChild(nodo,penultima);
    
   /*CAMBIAR LAS IMAGENES POR vias.jpg*/
    var img = document.getElementsByTagName("img");
    for(var i = 0; i < img.length; i++){
    img[i].src = "acantilado.jpg"}
}



/*Se crea un vector con los elementos que contendrá el formulario.*/
var elementos = ["Apellidos", "Nombre", "E-Mail", "Contraseña"]
        
/*Se añaden los elementos.*/
function añadirelementos(elementos){
        
    /*Se crea una relación entre la variable ENVIARELEMENTOS y el elemento ENVIAR.*/
    var enviarelementos = document.getElementById("enviar");
            
    /*El FOR sirve para colocar en la variable ETIQUETA los elementos (uno por uno).*/
    for(var i=0; i<elementos.length; i++){
        var etiqueta = elementos[i];

        /*Se crea una etiqueta P para ir poniendo los elementos del vector ELEMENTOS
        ahora colocados en la variable ETIQUETA, se le pone un ":"*/
        var elemento = document.createElement("p");
        elemento.appendChild(document.createTextNode(etiqueta + ": "));
                
        var textBox = document.createElement("input");
        textBox.id = etiqueta;
                
        elemento.appendChild(textBox);
        enviarelementos.parentNode.insertBefore(elemento,enviarelementos);
    }		
}	



function validaredad(){
    var edad = prompt("Introduce una edad: ");

    if(Number(edad)==edad){
        if(edad >= 18){
            alert("");
            document.getElementById("parrafodet").innerHTML="Puedes conducir.";
        } else {
            document.getElementById("parrafodet").innerHTML="No puedes conducir.";

        }
    } else {
        alert("Introduce una edad válida.");
    }
}



function evaluarnota(){
    //do{
        var nota=prompt("Introduce tu nota: ")

        if(Number(nota)==nota){
            var n = parseInt(nota);

            if(n>0 && n<3){
                alert("Muy deficiente.");
            } else if(n<=5){
                alert("Insuficiente.");
            } else if(n<=6){
                alert("Suficiente.");
            } else if(n<7){
                alert("Bien.");
            } else if(n<9){
                alert("Muy bien.");
            } else if(n>=9){
                alert("Sobresaliente.");
            }

        } else {
            alert("Introduce una nota válida.");
        }
    //}while(nota!=undefined)
}



function analizar(){
    var numeros = document.getElementById('numeros').value.split(",");
    var mayor = -Infinity, menor = +Infinity, suma = 0, media = 0;

    //SUMA
    for(i=0; i<numeros.length; i++){
        suma = parseInt(numeros[i]) + suma;
    }

    //MEDIA
    media = suma/numeros.length;

    //MENOR
    for(i=0; i<numeros.length; i++){
        if(parseInt(numeros[i]) < menor){
            menor = numeros[i];
        }
    }

    //MAYOR
    for(i=0; i<numeros.length; i++){
        parseInt(numeros[i])>mayor ? mayor=numeros[i]:null;
    }

    document.getElementById("contenido").innerHTML = 
    "La suma es: " + suma + "<br/>" +
    "La media es: " + media + "<br/>" +
    "El menor es: " + menor + "<br/>" +
    "El mayor es: " + mayor + "<br/>"
}