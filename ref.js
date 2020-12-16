// var x = 3; // number, string, boolean, undefined, null... pseudoprimitivi
// var y = x; // copiamo dentro y il valore di x; "copio il valore"
// y++;
// console.log('x:', x);

// //
// var x = { age: 3 }; // object;
// var y = x; // a destra dell'uguale abbiamo un valore object, "copio il riferimento di memoria"
// y.age++;
// console.log('x:', x.age);


// var x = { age: 3 }; // object;
// var y = x; // a destra dell'uguale abbiamo un valore object, "copio il riferimento di memoria"
// x.age++;
// console.log('y:', y.age);

// var x = {age: 3, name: 'Carlo', role: 'wing', surname: 'Meucci'};
// var z = {age: 10, role: 'fly-half'};
// var y = {
//     ...x,
//     ...z,
//     surname: 'Leonardi',
// }; // var y = x; per valore (anzichè per riferimento);
// y.age++;
// console.log('x:', x);
// console.log('y:', y);

// var arr1 = [3, 5, 6, 7];
// var arr2 = [10, 11, 9, 7];
// var arr3 = [
//     2,
//     ...arr1,
//     ...arr2,
//     10
// ] 
// console.log(arr3);

console.log([1, 2, 3].includes(2));


