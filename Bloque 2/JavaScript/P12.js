var a = b = c = d = e = f = 0;
    var totalTiradas = 0;
          
function tiradaDado(){
    var dado6caras = parseInt(6*Math.random()+1);
    return dado6caras;
}
        
for(i=1;i<=36000;i++){
    tirada = tiradaDado();
    switch(tirada){
        case 1: a++; break;
        case 2: b++; break;
        case 3: c++; break;
        case 4: d++; break;
        case 5: e++; break;
        case 6: f++; break;
    }
}

totalTiradas = a+b+c+d+e+f;
        
alert("El dado 1 ha salido " +  a + " veces.");
alert("El dado 2 ha salido " +  b + " veces.");
alert("El dado 3 ha salido " +  c + " veces.");
alert("El dado 4 ha salido " +  d + " veces.");
alert("El dado 5 ha salido " +  e + " veces.");
alert("El dado 6 ha salido " +  f + " veces.");
alert("Total de lanzamientos del dado: " + totalTiradas+".");