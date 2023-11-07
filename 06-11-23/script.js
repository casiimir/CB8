// function sum(first, second) {
//   return first + second
// }

// Arrow function
// const sum = (first, second) => first + second;

const calculator = (operation, firstNum, secondNum) => {
  // ... code
  if (operation === "+") {
    return firstNum + secondNum;
  } else if (operation === "-") {
    return firstNum - secondNum;
  }
  return "Operazione non valida";
};

const getElementsIndex = (arr) => {
  // console.log("Array in ingresso: ", arr);
  let fullArr = [];

  for (let i = 0; i < arr.length; i++) {
    fullArr.push("Valore: " + arr[i] + " | " + i);
  }

  return fullArr;
};

let myArray = ["mela", "pera", "kiwi"];
// console.log(calculator("*", 20, 3));
// console.log(myArray);
// console.log(getElementsIndex(myArray));

const sum = (first, second) => first + second;

const sub = (first, second) => first - second;

const mult = (first, second) => first * second;

function calculator2(fn) {
  return fn;
}

// XYZ = 1
// function calculator2(fn, operator) {
//   if (operator === "-") {
//     return fn;
//   }
// }

// let firstNum = prompt("Inserisci il primo numero");
// let secondNum = prompt("Inserisci il secondo numero");

// console.log(calculator2(sum(parseInt(firstNum), parseInt(secondNum))));

// console.log(calculator2(sub(5, 2), "-")); // XYZ = 1

// Callback alla invocazione
// function calculator2(fn) {
//   const firstNum = prompt("Inserisci il primo numero");
//   const secondNum = prompt("Inserisci il secondo numero");

//   return fn(parseInt(firstNum), parseInt(secondNum));
// }
// console.log(calculator2(sum))
//

// EXTRA!!!
// const onBtnClick = () => (document.body.style.backgroundColor = "black");
// const btnEl = document.querySelector("button");
// btnEl.addEventListener("click", onBtnClick);
