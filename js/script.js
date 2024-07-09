//Creare un ARRAY vuoto che conterrà i 5 numeri casuali

let numeri_casuali = [];
console.log(numeri_casuali)

document.getElementById('numeri').innerText = numeri_casuali.join(', ');

//Creare una funzione per i numeri casuali

function random_numbers(){
    while (numeri_casuali.length < 5){
    let num = Math.floor(Math.random() * 100 + 1);
        if (!numeri_casuali.includes(num)){
            numeri_casuali.push(num)
        }
    }
}

random_numbers();

//I numeri devono essere mostrati su schermo
document.getElementById('numeri').innerText = numeri_casuali.join(', ');

//Creare un SetTimeout di 30 secondi per far sparire i numeri dallo schermo

//Creo un prompt per chiedere all'utente di inserire i numeri visti su schermo precedentemente