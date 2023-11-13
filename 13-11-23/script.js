// const getTodayDate = () =>
//   new Date().getDate() +
//   "/" +
//   new Date().getMonth() +
//   "/" +
//   new Date().getFullYear();

// const person = {
//   name: 'Casi',
//   age: 30
// }

// Scrivere riga 7 e 8 corrisponde a scrivere riga 10
// const name = person.name
// const age = person.age
// Destructuring dell'oggetto dato
// const {name, message} = person

// TRY & CATCH
// try {
//   console.log("Va tutto bene", firstName);
// } catch (error) {
//   console.error("ERRORE - Nome dell'errore:", error.name);
//   console.error("ERRORE - Messaggio dell'errore:", error.message);
// }

const cE = (element) => document.createElement(element);

const quoteGen = (content, author) => {
  const wrapperEl = cE("div");
  const contentEl = cE("h3");
  const authorEl = cE("p");

  wrapperEl.className = "quote-card";
  contentEl.textContent = content;
  authorEl.textContent = author;
  wrapperEl.append(contentEl, authorEl);

  return wrapperEl;
};

const quotesList = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    id: 4,
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    id: 5,
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    id: 6,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 7,
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    id: 8,
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    id: 9,
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    id: 10,
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
];

// JSON.stringify converte l'oggetto in stringa - indispensabile per il corretto uso del localStorage
localStorage.setItem("quotesList", JSON.stringify(quotesList));
// JSON.parse converte la stringa in oggetto - indispensabile per il corretto uso del localStorage
// console.log(JSON.parse(localStorage.getItem("quotesList")));

const quotesListEl = document.querySelector(".quotes-list");

// Esattamente quello che fa con il map ma con il for classico
// for (let i = 0; i < quotesList; i++) {
//   document.body.append(quoteGen(quotesList[i].quote, quotesList[i].author));
// }

// TRY e Catch con SWITCH
// try {
//   quotesList.map((item) =>
//     quotesListEl.append(quoteGen(item.quote, item.author))
//   );
// } catch (error) {
//   switch (error.message.split(" ")[0]) {
//     case "quotesList":
//       const errorMessageEl = cE("h1");

//       errorMessageEl.textContent = "Manca la lista!";
//       quotesListEl.append(errorMessageEl);
//       break;
//     case "quoteGen":
//       console.error("Manca la funzione quoteGen()");
//       break;
//     default:
//       console.error(error);
//   }
// } finally {
//   console.log("Alla fine si esegue anche Finally");
// }

// TRY e Catch con IF - ELSE IF - ELSE
const localStorageQuotesList = JSON.parse(localStorage.getItem("quotesList"));

try {
  localStorageQuotesList.map((item) =>
    quotesListEl.append(quoteGen(item.quote, item.author))
  );
} catch (error) {
  if (error.message.split(" ")[0] === "quotesList") {
    const errorMessageEl = cE("h1");

    errorMessageEl.textContent = "Manca la lista!";
    quotesListEl.append(errorMessageEl);
  } else if (error.message.split(" ")[0] === "quoteGen") {
    console.error("Manca la funzione quoteGen()");
  } else {
    console.error(error);
  }
} finally {
  console.log("Alla fine si esegue anche Finally");
}

// localStorage.clear();
