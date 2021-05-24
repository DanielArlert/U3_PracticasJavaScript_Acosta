function info(cadena) {

    var resultado = "\""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " es una cadena hecha de mayúsculas.";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " es una cadena hecha de minúsculas";
    }
    else {
      resultado += " es una cadena hecha de mayúsculas y minúsculas.";
    }
  
    return resultado;
  }
  
  alert(info("A ESTAS HORAS, AQUÍ."));
  alert(info("Lento, amargo animal..."));
  alert(info("que soy, que he sido."));