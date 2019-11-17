// symbol type is used make sure object property is unique

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3)