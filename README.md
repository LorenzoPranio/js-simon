Esercizio di oggi(09/07/24): Simon Says
nome repo: js-simon

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Numero push minimi: 7

Consigli del giorno:
-Pensate prima in italiano.
-Dividete in piccoli problemi la consegna.
-Individuate gli elementi di cui avete bisogno per realizzare il programma.


|SOLUZIONE|

1.-Creare un ARRAY vuoto che conterrà i 5 numeri casuali

2.-Creare una funzione per i numeri casuali
2.1.-Creare un CICLE WHILE che genera 5 numeri casuali  
2.2.-IF il numero non è incluso nell'array
2.2.1-Push il numero
2.3.-I numeri verranno mostrati su schermo

3.-Creare un SetTimeout di 30 secondi per far sparire i numeri dallo schermo

4.-Creo un prompt per chiedere all'utente di inserire i numeri precdenti visti su schermo
4.1.-Il prompt deve essere mostrato dopo che i numeri sono spariti

5.-Creo una funzione per verificare se i numeri scritti dall'utente sono presenti nell'array
5.1.-IF l'elemento è presente nell'array
5.1.1.-in console log: "I numeri inseriti sono corretti"
5.2.-ELSE
5.2.1.-In console log: "I numeri inseriti non sono corretti"