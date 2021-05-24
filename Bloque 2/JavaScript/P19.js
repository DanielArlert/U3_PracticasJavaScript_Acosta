function dondeHasPinchado(elEvento){
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    var dimension = tamanoVentana();
    
    var tamanoX = dimension[0];
    var tamanoY = dimension[1];
    
    var posicionHorizontal = "";
    var posicionVertical = "";
    
    if(coordenadaX > tamanoX/2){
      posicionHorizontal = "derecha";
    }
    else{
      posicionHorizontal = "izquierda";
    }
    
    if (coordenadaY > tamanoY/2){
      posicionVertical = "inferior";
    }
    else{
      posicionVertical = "superior";
    }
    
    muestraInformacion2(['POSICION:', posicionHorizontal , posicionVertical]);
  
  }
  
  function tamanoVentana(){
    var dimensiones = [];
    
    if(typeof(window.innerWidth )== 'number'){
      // No es IE
      dimensiones = [window.innerWidth , window.innerHeight];
    }
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
      // IE6 en modo estandar
      dimensions = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    }
    else if(document.body && (document.body.clientWidth || document.body.clientHeight)){
      // IE en modo quirks
      dimensions = [document.body.clientWidth, document.body.clientHeight];
    }
    return dimensiones;
  }
  
  function muestraInformacion2(mensaje) {
    document.getElementById("posicion").innerHTML = '<h2>'+mensaje[0]+'</h2>';
    for(var i=1; i<mensaje.length; i++) {
      document.getElementById("posicion").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
  }
  
  document.onclick = dondeHasPinchado;
  