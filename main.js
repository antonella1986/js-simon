/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


document.addEventListener("DOMContentLoaded", function () {
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
            generateInputs();
    }, 30000);


});