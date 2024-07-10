//|VERSIONE FIXATA|\\

//Creo un ARRAY vuoto che conterrà i 5 numeri casuali
let numeri_casuali = [];
console.log(numeri_casuali)

//Creo una funzione per generare numeri casuali
function random_numbers() {
    while (numeri_casuali.length < 5) {
        let num = Math.floor(Math.random() * 100 + 1);
        if (!numeri_casuali.includes(num)) {
            numeri_casuali.push(num);
        }
    }
}

//Genero i numeri casuali
random_numbers();

//Mostro i numeri su schermo
document.getElementById('numeri').innerText = numeri_casuali.join(', ');

//Creo un setTimeout di 30 secondi per far sparire i numeri dallo schermo
setTimeout(function() {
    document.getElementById('numeri').innerText = '';
    // Creo un setTimeout di 1 secondo prima di mostrare i prompt
    setTimeout(function() {
        //Creo un array per le risposte dell'utente
        let risposte_utente = [];

        //Creo la funzione per chiedere i numeri all'utente
        function chiedi_numero(j) {
            if (j < 5) {
                let numeri_utente = prompt("Inserisci i numeri che hai visto (numero " + (j + 1) + " di 5):");
                risposte_utente.push(Number(numeri_utente));
                chiedi_numero(j + 1);
            } else {
                //Verifico i numeri inseriti dall'utente
                verifica_numeri(risposte_utente);
            }
        }
        //Chiedo i numeri all'utente
        chiedi_numero(0);
    }, 1000);
}, 3000);

//Creo una funzione per verificare se i numeri scritti dall'utente sono presenti nell'array
function verifica_numeri(risposte_utente) {
    let numeri_corretti = [];
    //Verifico i numeri inseriti dall'utente
    for (let num of risposte_utente) {
        if (numeri_casuali.includes(num)) {
            numeri_corretti.push(num);
        }
    }
    //Mostro quanti e quali numeri sono stati indovinati
    if (numeri_corretti.length > 0) {
        console.log("Hai indovinato " + numeri_corretti.length + " numeri: " + numeri_corretti.join(', '));
    } else {
        console.log("Non hai indovinato nessun numero.");
    }
}

//|PRIMA VERSIONE|\\

//Creare un ARRAY vuoto che conterrà i 5 numeri casuali
// let numeri_casuali = [];
// console.log(numeri_casuali)
// document.getElementById('numeri').innerText = numeri_casuali.join(', ');
//Creare una funzione per i numeri casuali
// function random_numbers(){
//     while (numeri_casuali.length < 5){
//     let num = Math.floor(Math.random() * 100 + 1);
//         if (!numeri_casuali.includes(num)){
//             numeri_casuali.push(num)
//         }
//     }
// }
// random_numbers();
//I numeri devono essere mostrati su schermo
// document.getElementById('numeri').innerText = numeri_casuali.join(', ');
//Creare un SetTimeout di 30 secondi per far sparire i numeri dallo schermo
// setTimeout(function() {
//     document.getElementById('numeri').innerText = '';
//     //Creare un SetTimeout di 1 secondo prima di mostrare il prompt
//     setTimeout(function() {
//         //Creo un prompt per chiedere all'utente di inserire i numeri visti su schermo precedentemente
//         for (let i = 0; i < 5; i++) {
//         let numeri_utente = prompt("Inserisci i numeri che hai visto");
//         // Verifica i numeri inseriti dall'utente
//         verifica_numeri(numeri_utente);
//         }
//     }, 1000);
// }, 3000);

//Creo una funzione per verificare se i numeri scritti dall'utente sono presenti nell'array
// function verifica_numeri(numeri_utente) {
//     let arr_numeri_utente = numeri_utente.split(',').map(Number);
//     let numeri_corretti = true;
//     //IF l'elemento è presente nell'array
//     for (let num of arr_numeri_utente) {
//         if (!numeri_casuali.includes(num)) {
//             numeri_corretti = false;
//         }
//     }
//     //In console log: "I numeri inseriti sono corretti"
//     if (numeri_corretti) {
//         console.log("I numeri inseriti sono corretti");
//     } else {
//         //In console log: "I numeri inseriti non sono corretti"
//         console.log("I numeri inseriti non sono corretti");
//     }
// }
