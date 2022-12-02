console.log('JS OK');

/* Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/ 

/*
1. Prendere elemento dal DOM
2. Creare variabile n.21
3. Chiedere il nome all'utente
4. Chiedere il cognome all'utente
5. Chiedere il colore preferito all'utente
6. Creare variabile con calcolo pwd
7. Riportare nel DOM
*/

// PRENDERE ELEMENTO DAL DOM 
const pwdGenerator = document.getElementById('pwd-generator');
// console.log(pwdGenerator);

// CREARE VARIABILE N21
const number = '21';
/* console.log(number);
console.log(typeof number); */

// CHIEDERE NOME ALL'UTENTE
const utentName = prompt('Digita il tuo nome', 'Domenica');
// console.log(utentName);

// CHIEDERE COGNOME ALL'UTENTE
const utentLastName = prompt('Digita il tuo cognome', 'Tonziello')
// console.log(utentLastName);

// CHIEDERE IL COLORE PREFERITO ALL'UTENTE
const favColor = prompt('Digita il tuo colore preferito', 'verde')
// console.log(favColor);

// CREARE VARIABILE CON CALCOLO PWD
const pwd = utentName + utentLastName + favColor + number;
// console.log(pwd);

// RIPORTO NEL DOM
pwdGenerator.innerText = pwd;
