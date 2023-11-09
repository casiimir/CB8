# Esercizio 1

Tra le molteplici sezioni ed effetti visivi nel web, esistono alcuni elementi ricorrenti. Tra questi sicuramente emergono le cards, i caroselli, gli sliders di immagini, e così via. Per l'esercitazione numero 1, creare una `sezione hero` **_dinamicamente_** (quindi javascript).

> Esempio di sezione Hero:
> https://www.w3schools.com/howto/howto_css_hero_image.asp

# Esercizio 2

Sicuramente la vostra Hero page includerà un button vero? (Se non lo avete aggiunto correte!).
Aggiungere a questo pulsante un evento di tipo `click`, cosicchè non appena viene cliccato scateni una funzione che nasconda tutta la `sezione hero` per intera. (Aiutatevi con la proprietà CSS `display: none`).

# Avanzato

Sulla base dell'oggetto fornito sotto, creare una `sezione gallery`. Questa sezione deve essere popolata dinamicamente, attraverso una funzione creata ad-hoc `imageGenerator` che generi una immagine in base agli argomenti passati all'invocazione.
Il risultato deve essere almeno una immagine completa di `src`, `alt` e `id`. Trovate Queste 3 chiavi all'interno dell'oggetto stesso.
Inoltre l'immagine avrà anche un attributo di tipo `class` che permetterà l'aggiunta di CSS.

```javascript
{
  id: 1,
  imgUrl: 'https://picsum.photos/200/200?1',
  altText: 'Immagine alternativa 1'
}
```

# Avanzato per gli audaci

Qui cè un array di oggetti, renderizzare n immagini per quanti sono gli oggetti presenti nell'array. Utilizzare la stessa funzione `imageGenerator`.
Attenzione, la funzione `imageGenerator` deve essere pura!

```javascript
const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];
```
