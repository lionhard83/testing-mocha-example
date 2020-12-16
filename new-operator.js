var users = [
    {id: 1, name: 'Carlo', sex: 'M', age: 17}, 
    {id: 2, name: 'Mario', sex: 'F', age: 31}, 
    {id: 3, name: 'Giovanni', sex: 'M', age: 35}, 
    {id: 4, name: 'Carlo', sex: 'M', age: 40}];


// users[0];

// filtraggio estrpolazione
// item, index, array

// restituisce un array
var user = users.filter(item => item.id == 2);
// console.log('user:', user);

// restituisce un oggetto (undefined se non lo trova)
var user0 = users.find(item => item.id == 10); // trova l'elemnto che corrisponde alla condizione
console.log('user0:', user0);

// restituisce un intero (-1 se non lo trova)
var user2 = users.findIndex(item => item.id == 10); // trova l'elemnto che corrisponde alla condizione
// console.log('user2:', user2);

// restituisce un booleano
var result = users.every(item => item.sex === 'M'); // tutti gli elementi corrispondo alla condizione
console.log(result);

// restituisce un booleano
const x = (item) => item.age < 18

var result2 = users.some(x); // esiste almeno un elemento che corrisponde alla condizione
console.log(result);