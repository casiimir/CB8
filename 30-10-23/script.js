// PROMPT prende in ingresso (input - da tastiera) una stringa
// let myName = prompt("Come ti chiami?");

// console.log("Benvenuto " + myName + " io sono Javascript :D");

// let myAge = prompt("Quando sei nato? Dimmi solo l'anno");

// console.log(
//   "Quindi hai " + (new Date().getFullYear() - parseInt(myAge)) + " anni!"
// );

// let myAge = prompt("Quanti anni hai?");

// ISTRUZIONE CONDIZIONALE IF - ELSE IF - ELSE
// if (myAge < 18) {
//   console.log("Sei minorenne, mi dispiace devi uscire!");
// } else if (myAge > 18) {
//   console.log("Sei maggiorenne, prego!");
// } else {
//   console.log("Sei appena maggiorenne, non so se ti faccio entrare ...");
// }

// Trasposizione in Switch dell'IF sopra
// switch (parseInt(myAge)) {
//   case 1:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break; // Esce fuori dallo switch
//   case 2:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break;
//   // ... case n
//   case 17:
//     console.log("Sei minorenne, mi dispiace devi uscire!");
//     break;
//   case 18:
//     console.log("Sei appena maggiorenne, non so se ti faccio entrare ...");
//     break;
//   case 19:
//     console.log("Sei maggiorenne, prego!");
//     break;
//   default:
//     console.log("Hai finito i numeri");
// }

// OPERATORE TERZIARIO
// myAge >= 18
//   ? console.log("Sei maggiorenne")
//   : console.log("Sei minorenne hai appena: " + myAge + " anni");

// let msgRequest = prompt("Sono l'indovino, fai la tua domanda");

// if (
//   msgRequest === "Che tempo fa oggi?" ||
//   msgRequest === "che tempo fa oggi?"
// ) {
//   console.log("Ci sono 24 gradi");
// } else if (msgRequest === "Come mi chiamo?") {
//   console.log("Sei Casimiro");
// } else if (msgRequest === "In che anno siamo?") {
//   console.log(new Date().getFullYear());
// } else {
//   console.log("Riformula la domanda, non ho capito");
// }

// BONUS
// function print(arg) {
//   console.log(arg);
// }

// print(222, 55);
