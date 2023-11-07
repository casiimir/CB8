# Esercizio 1

Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks. Fate in modo che possa calcolare le quattro operazioni base matematiche ( + - \* /) e che prenda non due ma tre valori numerici sui quali eseguire queste operazioni.
In questo caso, potete aiutarvi con il codice della lezione.

# Esercizio 2

Creare un array di oggetti che simuli la lista del carrello di un e-commerce. Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine, e una descrizione. Processate il seguente array di oggetti con map e forEach, e scriverne in commento la differenza. Basta solo stamparne il contenuto.

# Avanzato - Trasformazione e Filtraggio di un Elenco di Numeri

### Descrizione

> Dati due array di numeri, utilizzando i metodi map e filter:

1. Trasformazione (utilizzando map):

Prendere il primo array e moltiplicare ogni elemento per 2.
Prendere il secondo array e aggiungere 5 ad ogni elemento.

2. Filtraggio (utilizzando filter):

Dal primo array trasformato, filtrare e tenere solo i numeri che sono maggiori di 10.
Dal secondo array trasformato, filtrare e tenere solo i numeri pari.

> Esempio: dati i seguenti array:

`array1 = [3, 6, 9, 12]` <br><br>
`array2 = [5, 10, 15, 20]`

Dopo la trasformazione:
`array1 trasformato diventa [6, 12, 18, 24]`<br><br>
`array2 trasformato diventa [10, 15, 20, 25]`

Dopo il filtraggio:
Dal array1 trasformato, tenere solo i numeri maggiori di 10: [12, 18, 24]
Dal array2 trasformato, tenere solo i numeri pari: [10, 20]

> Cosa fare?
> Scrivere una funzione `transformAndFilter` che accetta due array, applica le operazioni di trasformazione e filtraggio sopra descritte, e restituisce due nuovi array con i risultati. Alla fine fare console.log per verificarne il risulato come l'esempio sopra.
