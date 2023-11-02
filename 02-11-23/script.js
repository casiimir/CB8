// Funzione completa
function calculator(operation, firstNum, secondNum) {
  console.log(value); // Accettato
  if (operation === "sum") {
    return firstNum + secondNum;
  } else if (operation === "sub") {
    return firstNum - secondNum;
  } else if (operation === "mult") {
    return firstNum * secondNum;
  } else {
    return "Non ho capito quale operazione vuoi svolgere";
  }
}

// console.log(calculator("sum", 5, 2));
// console.log(calculator("mult", 5, 2));
// console.log(calculator("sub", 51, 20));
// console.log(calculator("pippo", 51, 20));
// let calculatorResult = calculator("sum", 5, 2);
// console.log(calculatorResult);

// Funzione senza argomenti
function welcomeMessage() {
  return "Benvenuto! Come stai??";
}

// console.log(welcomeMessage());

function getDayStatus(actualHour) {
  if (actualHour >= 6 && actualHour <= 12) {
    return "mattino";
  } else if (actualHour > 12 && actualHour <= 18) {
    return "pomeriggio";
  } else if (actualHour > 18 && actualHour <= 24) {
    return "sera";
  } else if (actualHour >= 0 && actualHour <= 6) {
    return "notte";
  } else {
    return "Ora fornita non valida";
  }
}

// console.log(getDayStatus(5.41));

// OBJECTS IN JS
const smartphone324 = {
  title: "Apple Iphone 15",
  brand: "Apple",
  color: ["silver", "black"],
  "price-tot": 1400.0,
};

// console.log(smartphone324);
// // accesso alla chiave per puntino di congiunzione
// console.log(smartphone324.color);
// // accesso alla chiave per stringa di testo
// console.log(smartphone324["price-tot"]);

const myDog = {
  name: "Willy", // proprietà
  age: 3, // proprietà
  color: "white", // proprietà
  "eyes-color": "azure", // proprietà
  // metodi
  burk: function () {
    return "Io sono: " + this.name + " Bauu bauu bauu!";
  },
};

// console.log(
//   "Il mio cagnolino si chiama",
//   myDog.name,
//   "il colore dei suoi occhi è",
//   myDog["eyes-color"],
//   "e ogni tanto fa:",
//   myDog.burk()
// );

const ourConsole = {
  // ...
  log: function (arg) {
    console.log(arg);
  },
};

// ourConsole.log("Proviamo questo log");

// SCOPE - accessibilità delle variabili
let firstVar = "Scope globale";
let rescueDefVar = "";

function abc() {
  // ...
  let secondVar = "Scope locale - 1 livello - funzione abc";

  function def() {
    let thirdVar = "Scope locale - 2 livello - funzione def";
    rescueDefVar = thirdVar;

    console.log(firstVar); // Va bene
    console.log(secondVar); // Va bene
    console.log(thirdVar); // Va bene
    // ...
    return 0;
  }

  def(); // Invocazione necessaria per l'esecuzione della funzione def()
  // console.log(firstVar); // Va bene
  // console.log(secondVar); // va bene
  // console.log(thirdVar); // ERRORE - siamo fuori scope

  return 0;
}

abc(); // Invocazione necessaria per l'esecuzione della funzione abc()
console.log("=======>", rescueDefVar);
