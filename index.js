// function pariODispari(number) {
//   return number % 2 == 0;
// }

// function somma(number1, number2, number3, number4) {
//   var risultato = 0;
//   if (pariODispari(number1)) {
//     risultato = risultato + number1;
//   }
//   if (pariODispari(number2)) {
//     risultato = risultato + number2;
//   }
//   if (pariODispari(number3)) {
//     risultato = risultato + number3;
//   }
//   if (pariODispari(number4)) {
//     risultato = risultato + number4;
//   }

//   return risultato;
// }

// function sommaConArray(numeri) {
//   var risultato = 0;
//   for (var i = 0; i < numeri.length; i = i + 1) {
//     if (pariODispari(numeri[i])) {
//        risultato = risultato + numeri[i];
//     }
//   }
//   return risultato;
// }
// var lista = [9, 11, 12, 78, 5, 4, 23, 20];
// console.log(sommaConArray(lista));

// [2, 3, 4], 5 => [10, 15, 20]
// [1, 4, 5], 3 => [3, 12, 15]

function moltiplicaArray(numeri, moltiplicatore) {
  var risultato = [];
  for (var i = 0; i < numeri.length; i = i + 1) {
    risultato[i] = numeri[i] * moltiplicatore;
  }
  return risultato;
}

function estraiPari(numeri) {
  var risultato = [];
  for (var i = 0; i < numeri.length; i = i + 1) {
    if (numeri[i] % 2 == 0) {
      risultato.push(numeri[i]);
    }
    // risultato[i] = numeri[i] * moltiplicatore;
  }
  return risultato;
}

var numeri = [2, 3, 4, 11, 14];
console.log(numeri);
moltiplicaArray(numeri, 5);
console.log(numeri);
estraiPari(numeri);

var l = [1, -2, -34, 11];
l[2]

// for (var indice = 0; indice < lista.length; indice = indice + 1) {
//   console.log(lista[i]);
// }

// i = 0;

// 0 < 3 ?
// stampa lista[0]
// i = i + 1 = 0 + 1 = 1

// 1 < 3 ?
// stampa lista[1]
// i = i + 1 = 1 + 1 = 2

// 2 < 3 ?
// stampa lista[2]
// i = i + 1 = 2 + 1 = 3

// 3 < 3 ?

//
// function sanitizeMonth(month) {
//   var trimmedMonth = month.trim();
//   var lowercaseMonth = trimmedMonth.toLowerCase();
//   return lowercaseMonth;
// }

// function getDaysByMonth(month) {
//   var sanitizedMonth = sanitizeMonth(month);

//   if (
//     sanitizedMonth == "september" ||
//     sanitizedMonth == "april" ||
//     sanitizedMonth == "june" ||
//     sanitizedMonth == "november"
//   ) {
//     return 30;
//   }

//   if (sanitizedMonth == "february") {
//     return 28;
//   }

//   return 31;
// }

// getDaysByMonth("          FEBRUARY ");

// function calculateDaysPerMonths(month1, month2, month3) {
//   console.log("calculate");
// }

// calculateDaysPerMonths();
// calculateDaysPerMonths();
