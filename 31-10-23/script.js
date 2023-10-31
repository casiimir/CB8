// Arrays - indice comincia con 0 - il primo elemento quindi corrisponde a index 0
const fruits = ["apple", "kiwi", "ananas", "orange", "pear", "ananas"];
const emptyArray = []; // Array vuoto

// console.log(fruits); // Stampo tutti i valori della variabile fruits
// console.log(fruits[0]); // Stampo il primo elemento
// console.log(fruits[3]); // Stampo il quarto elemento

// console.log("Il mio array vuoto", emptyArray);

// console.log(fruits.length); // Ritorna il numero di elementi all'interno dell'array

console.log("Array iniziale", fruits);
fruits.push("watermelon"); // Aggiunge un elemento alla coda dell'array - index (arr.length - 1)
console.log("Array dopo il push", fruits);
fruits.pop(); // Rimuove l'ultimo elemento presente nell'array
console.log("Array dopo il pop", fruits);
fruits.shift(); // Rimuove il primo elemento presente nell'array - index 0
console.log("array dopo shift", fruits);
fruits.unshift("mango"); // Aggiunge un elemento alla testa dell'array - index 0
console.log("Array dopo unshift", fruits);

console.log(fruits[fruits.length - 1]); // Stamperà sempre l'ultimo elemento

// console.log(fruits[Math.round(fruits.length / 2) - 1]); // Stamperà il valore al centro dell'array
// fruits.splice(0, 4); // Rimuove n elementi in un range di start ed end

// console.log("Array dopo splice di 1 - 3", fruits);
console.log("Indice dell'ananas:", fruits.indexOf("ananas")); // Ritorna indice di un elemento dell'array (da sx)
console.log("Indice dell'ananas:", fruits.lastIndexOf("ananas")); // Ritorna indice di un elemento dell'array (da dx)
console.log("è presente il kiwi nell'array?", fruits.includes("kiwis")); // Ritorna vero o falso se un elemento è presente o meno
console.log(fruits.reverse()); // Inverte ordine dell'array
console.log(fruits.join(" - ")); // Trasforma un array in una stringa

console.log("Ciao ragazzi, la creatività con la stanchezza scema".split(" ")); // Metodo per le STRINGHE, trasforma una stringa in array

for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}
