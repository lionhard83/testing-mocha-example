// // per i number
// // tutti truthy a meno dello 0
// var x = 2;  // truthy o falsy

// // per le stringhe
// // sono tutti truthy a meno della stringa vuota

// // booleani ovvi, true è truthy

// // null e undefined sono falsy

// // object sono truthy

// var y = '2';
// var z = ''
// var x2 = {} // truthy
// var z2 = [] // truthy

// console.log(typeof x);
// console.log(typeof y);
// console.log(x == y);
// console.log(x === y); // x == y && typeof x == typeof y;


// var xf = () => { return 1 }
// var xf2 = () => { return "Pippo" }
// // console.log di una funzione
// console.log('xf1:', xf);
// // console.log di un esecuzione di una funzione
// console.log('xf2:', xf());

// var g = function(fGeneric) {
//     return fGeneric();
// }

// console.log(g(xf2));


// (() => {
//      console.log('ciao');
// })(); // wrappata


// for (var i in arr) {
//     console.log(i);
//     console.log(arr[i]);
// }

// var obj = { name: 'Carlo', surname: 'Leonardi'}

// for (var key in obj) {
//     console.log(key);
//     console.log(obj[key])
// }
// var arrComplex = [{id: 2, name: 'Carlo'}, {id: 3, name: 'Giovanni' }, {id: 4, name: 'Mario' }];
// var f = (item, index) => {
//     if (index % 2 === 0) {
//         item.name = "Caio";
//     }
//     return item;
// };
// arrComplex = arrComplex.map(f);
// console.log(arrComplex);

// var fForFilter = (item) => {
//     console.log(item);
//     // return undefined;
// }

// arr = arr.filter(fForFilter);
// console.log(arr);

// var arr = [2, "ciao", 5, 0 , 10, "pippo", true, NaN, undefined];

// arr = arr.find(item => {
//     if (item === "ioqwn") {
//         return true;
//     }
//     return false;
// })
// console.log(arr);

// var arrComplex = [{id: 2, name: 'Carlo'}, {id: 3, name: 'Giovanni' }, {id: 4, name: 'Mario' }];

// // arrComplex = arrComplex.find(item => item.id === 3);
// // arrComplex = arrComplex.find(item => { return item.id === 2 });
// var index = arrComplex.findIndex(item => item.id === 3);
// console.log(index);

// var arr = [4, 7, 6, 8];
// var accumulator = 4;
// for (i in arr) {
//     accumulator += String(arr[i]); 
// }
// console.log(accumulator);

// var sum = arr.reduce((accumulator, item) => accumulator + item, 0);
// console.log('sum:', sum);
// var t = "pippo";

// var text = "abc";

// var cript = (textToCript, shift = 0) => {
//     return textToCript.toUpperCase().split("").map(letter => (letter.charCodeAt() - 65 + shift)).map(n => n === (-33 + shift) ? ' ' : n).join("-");
// }

// var decript = (textToCript, shift = 0) => {
//     return textToCript.split("-").map(num => num === ' ' ? ' ' : String.fromCharCode(Number(num) + 65 - shift)).join(''); 
// }

// var result = cript(text);
// console.log('result:', result);
// console.log(decript(result, 3));

// // CIAO == OAIC
// // ANNA == ANNA

// var isPalindrome = (textToVerify) => {
//     var textToVerify = textToVerify.split("").filter(letter => letter !== ' ').join("");
//     return textToVerify === textToVerify.split("").reverse().join("");
// }

// console.log(isPalindrome("I TOPI NON AVEVANO NIPOTI"));
// console.log(isPalindrome("ANGELA LAVA LA LEGNA"));

// var getMaxMin = (arrayToValue) => {
//     arrayToValue.unshift();
//     return arrayToValue.reduce((currentMaxMin, currentArrayValue) => {
//         return {
//             max: currentMaxMin.max > currentArrayValue ? currentMaxMin.max : currentArrayValue,
//             min: currentMaxMin.min < currentArrayValue ? currentMaxMin.min : currentArrayValue,
//         }
//     }, {max: arrayToValue[0], min: arrayToValue[0]});
// }

// var arrayToPass = [3, 6, 7, 14, 98, 14, 21];
// console.log(getMaxMin(arrayToPass))

//  var arr = [3, 5, 6, 7, 10];

// arr.map(function () {
//     console.log('this:', this);
// })

// arr.map((item) => {
//     console.log('this2:', this);
// }, this)

var x = ()=> {console.log("Sto eseguendo")};
setTimeout(x, 2000); // dopo 2 secondi -> x()

// (funzione di callback, time in millis)