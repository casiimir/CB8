# Esercizio "My Favorite Books"

### Per l'esecuzione dell'esercitazione considerare che più punti si soddisfano meglio è.

Crea un'applicazione Express che gestisca una piccola libreria virtuale. L'utente può aggiungere i suoi libri preferiti e visualizzarli in una lista. Ogni libro avrà un titolo e un autore.

1. Imposta il tuo progetto Express usando body-parser per gestire i dati del form.
2. Crea un array di libri nel tuo file principale server.js che fungerà da semplice database.
3. Implementa la rotta GET /add-book che mostra un form HTML per aggiungere un nuovo libro. Il form deve avere campi per il titolo del libro e l'autore.
4. Implementa la rotta POST /books per aggiungere un nuovo libro all'array dei libri.
5. Dopo l'aggiunta, reindirizza l'utente alla pagina che mostra tutti i libri.
   Implementa la rotta GET /books che mostra una lista di tutti i libri aggiunti.

> Non preoccupatevi di come mostrate o gestite le informazioni, scegliete pure l'approccio che ritenete più opportuno. L'approccio migliore lo vediamo a lezione insieme con implementazioni simili o affini.
