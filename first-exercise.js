// function operatore(numbers){
//   var risultato = [];
//   for(var i = 0; i < numbers.length; i = i + 1){
//     risultato[i] = numbers[i] 
// }

// }



// function modula(value){
//   var resto = value % 2;
//   if (resto == 0){
//     console.log("Pari");
//   }
//   else{
//     console.log("Dispari");
//   }
// }

// modula(3)


function numeroPari(numero) {
  return numero % 2 == 0;
}

function estraiPariDispari(numeri, voglioPari) {
  var risultato = [];

  for(var i = 0; i < numeri.length; i++) {
    var pari = numeroPari(numeri[i]);

    if(pari == true) {
      if ( voglioPari == true ) {
        risultato.push(numeri[i]);
      }
    }
    else {
      if (voglioPari == false) {
        risultato.push(numeri[i]);
      }
    }
  }

  return risultato;
}


var numbers = [22, 44, 77, 56, 87, 45];
console.log(estraiPariDispari(numbers, true));
console.log(estraiPariDispari(numbers, false));
