//Creare un ARRAY vuoto che conterrà i 5 numeri casuali

let numeri_casuali = [];

//Creare un SetTimeout di 30 secondi per far sparire i numeri dallo schermo

//Creo un prompt per chiedere all'utente di inserire i numeri visti su schermo precedentemente

//Creare una funzione per i numeri casuali

function random_numbers(){
    while (random_numbers.length < 5){
        let num = Math.floor(Math.random() * 100 + 1);
        if (!random_numbers.includes(num)){
            random_numbers.push(num)
        }
    }
}

//Creo una funzione per verificare se i numeri scritti dall'utente sono presenti nell'array