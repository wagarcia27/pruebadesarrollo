var hoy = new Date();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
console.log(hora);

var numeroFibonacc = parseInt(hoy.getSeconds());
var numeroFibonacci = numeroFibonacc + 2;

var vectorFibonacci = [];

var num1 = hora.charAt(3);
if (num1 == 0){
    alert('El indice del primer minuto debe ser superior a 0')
}
var num2 = hora.charAt(4);
if (num2 == 0){
    alert('El indice del segundo minuto debe ser superior a 0')
}
vectorFibonacci[0] = parseInt(num1);
vectorFibonacci[1] = parseInt(num2);

if (numeroFibonacci > 0) {

  for (var i = 2; i < numeroFibonacci; i++) {
    vectorFibonacci[i] = vectorFibonacci[i - 2] + vectorFibonacci[i - 1];
  }
  //console.log(vectorFibonacci);
}else{

alert("Los segundos deben ser superior a 0")

}

const reversed = vectorFibonacci.reverse();
console.log('reversed:', reversed);