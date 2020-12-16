// var conversions = require('./values.json');
// var items = conversions.map(item => item.originalValue);
// var set = new Set(items); // set non è un array e non posso applicare metodi degli array
// var valideCurrency = [...set]; // operazione di spread, includere all'interno tutto il set e converirlo in array 

// // console.log(valideCurrency); // [ '€', '$', '£', '¥' ]

// var convert = (currencyToStart, currencyToEnd, value) => {
//     if (valideCurrency.includes(currencyToStart) && valideCurrency.includes(currencyToEnd)) {
//         var convertedObject = conversions.find(item => item.originalValue === currencyToStart && item.convertedValue === currencyToEnd);
//         return convertedObject.taxConversion * value;
//     }
//     return {message: 'format not valid'};
// }


// console.log(convert("L", "€", 2));


// var a = ['a', 'b', 'c'];
// var b = [1, 2, 3];

// var c = [...a, ...b]; // spread 


