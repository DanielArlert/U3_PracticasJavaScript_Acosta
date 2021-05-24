function limita(elEvento, maximoCaracteres) {
  var elemento = document.getElementById("registro_password");


  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;

  
  if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
  }


  
  if(codigoCaracter == 8 || codigoCaracter == 46) {
    return true;
  }
  else if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }

}
