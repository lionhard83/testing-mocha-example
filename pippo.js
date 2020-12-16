// var _a;
// console.log('hello');
// var y = 0;
// var c1 = y !== null && y !== void 0 ? y : 2; // sx falsy --> dx null, undefined
// var c2 = y || 2; // sx falsy --> dx 0, '', false, null, undefined
// console.log(c1);
// console.log(c2);
// var arr = [1, 4, 5, 6, 7, 8];
// var z2 = (_a = arr.findIndex(1)) !== null && _a !== void 0 ? _a : null;

const { type } = require("os");


const x  = function () {
    return 2;
}
x.pippo = 3;

let y  = () => {
    this.x = 2;
    console.log('this2:', this);
}
// y.pippo = 2;

x();
// y();
console.log(typeof x);
console.log(x.pippo && x());
// console.log(y);


const default1 = {name: 'Carlo', surname: 'Leonardi'}
const g = {name: 'Pippo', surname: 'Caio'}

const h = {
    ...default1, 
    ...g
}