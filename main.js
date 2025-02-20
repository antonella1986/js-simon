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
    // a questo punto l'utente può inserire negli input appena generati i numeri che ricorda
    // mostriamo il pulsante "Invia"
    submitButtonEl.style.display = "block";
}

// aggiungiamo l'evento del clic, in modo che i numeri inseriti negli input vengano inviati
submitButtonEl.addEventListener("click", function() {
    // verifichiamo se i numeri inseriti dall'utente sono corretti
    // creiamo un nuovo array con i numeri inseriti dall'utente CHE SONO ANCHE PRESENTI nell'array dei numeri random generati all'inizio
    let correctNumbers = userNumbers.filter(function(num) {
        return randomNumbers.includes(num); // includes() ci serve per sapere se i numeri inseriti esistono nell'array "originale" randomNumbers
    });
});

// stampiamo il risultato
resultContainer.innerText = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(", ")}`;

