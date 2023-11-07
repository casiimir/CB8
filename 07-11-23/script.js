const findIndexInArr = (array, value) => {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
    }
  }

  return index;
};

const isValueInArray = (array, value) => {
  let index = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = true;
    }
  }

  return index;
};

const filterArrayValuesLength = (array, length) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= length) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

let fruits = ["mela", "pera", "arancia", "kiwi"];
let animals = ["gatto", "cane", "mucca", "pecora"];

// console.log(findIndexInArr(animals, "gatto"));
// console.log(isValueInArray(fruits, "gatto"));
let filteredArray = filterArrayValuesLength(fruits, 4);
// console.log(filteredArray);

// ForEach - non ritorna alcun valore
// fruits.forEach((fruit) => {
//   if (fruit.length >= 5) console.log(fruit);
// });

const forEachResult = fruits.forEach((fruit) =>
  fruit.length >= 5 ? fruit : null
);

// console.log("forEach:", forEachResult);

// Map - H.O.F - ritorna un nuovo array composto dallo stesso numero di elementi in ingresso
const mapResult = fruits.map((fruit) => (fruit.length >= 5 ? fruit : null));

// console.log("map:", mapResult);

// Filter - H.O.F - ritorna un nuovo array composto dai soli elementi che soddisfano la condizione
const filterResult = fruits.filter((fruit) => fruit.length >= 5);

// console.log("filter:", filterResult);

let person = {
  name: "Casi",
  surname: "Cianci",
  age: 30,
};

let people = [
  {
    name: "Casi",
    surname: "Cianci",
    age: 30,
  },
  {
    name: "Pippo",
    surname: "Topolino",
    age: 19,
  },
  {
    name: "Caio",
    surname: "Sempronio",
    age: 45,
  },
];

// Stampa uno ad uno tutte le persone all'interno dell'array
// people.forEach((person) => console.log(person));
// diverso da ...
let forEachPeople = people.forEach((person) => person);
// console.log(forEachPeople);

// filtro per struttura array di oggetti
const youngPeople = people.filter((person) => person.surname.length >= 7);

// console.log(youngPeople);

// Ritorna solo le età delle persone all'interno dell'array
const peopleAges = people.map((person) => person.age);

console.log(peopleAges);

// Un filter un pò troppo esuberante
// let newArray = []

// people.forEach((person) => {
//   if(person.surname.length >= 7) {
//     newArray.push(person)
//   }
// });

// H.O.F.
