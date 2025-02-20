/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



const numbersContainerEl = document.getElementById("numbers");
const inputContainerEl = document.getElementById("input");
const resultContainerEl = document.getElementById("result");
const submitButtonEl = document.getElementById("submit");

// generiamo 5 numeri random (da 1 a 100)

// creiamo un array dove verranno inseriti i numeri generati a random...
let randomNumbers = [];
// ...tramite un ciclo for
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
// mostriamo i numeri in pagina, separati da un trattino
numbersContainerEl.innerText = randomNumbers.join(" - ");


// impostiamo un timer di 30 secondi
setTimeout(function() {
        // dopo 30 secondi i numeri spariscono
        numbersContainerEl.innerText = "";
        // richiamiamo la funzione per generare gli input in cui l'utente deve inserire i numeri che ha tentato di memorizzare
        generateInputs();
}, 30000);

// funzione per generare i 5 input
function generateInputs() {
    // creiamo un ciclo
    for (let i = 0; i < 5; i++) {
        // creiamo un nuovo input
        let input = document.createElement("input");
        // diciamo al sistema che l'utente può scrivere solo numeri negli input
        input.type = "number";
        // assegnamo una classe all'input...
        input.classList.add("user-input");
        // ...e lo buttiamo nell'HTML
        inputContainerEl.appendChild(input);
    }
    // mostriamo il pulsante "Invia"
    submitButtonEl.style.display = "block";
}
