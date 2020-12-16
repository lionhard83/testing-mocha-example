console.log('hello');
const y = 0;
const c1 = y ?? 2; // sx falsy --> dx null, undefined
const c2 = y || 2; // sx falsy --> dx 0, '', false, null, undefined
console.log(c1);
console.log(c2);

const arr = [1, 4, 5, 6, 7, 8];
var z2 = arr.findIndex(1) ?? null;


