//inserisci nome, cognome e colore preferito//

/*
1. Inizializzo variabili con i dati
2. Stampo dati
*/

const firstname = prompt(`Qual è il tuo nome?`);
const lastname = prompt(`Qual è il tuo cognome?`);
const color = prompt(`Qual è il tuo colore preferito?`)

console.log(firstname)
console.log(lastname)
console.log(color)

document.getElementById(`stampa`).innerHTML =
`
Nome: ${firstname} <br>
Cognome: ${lastname} <br>
Colore preferito: ${color} <br>
`
const thisyear = 21;
const password = firstname + lastname + color + thisyear;

document.getElementById(`password`).innerHTML = 
`
Password: <strong>${password}</strong>
`