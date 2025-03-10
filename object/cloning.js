let a = {value:10};
let b = {};
/// OR let b = {...a}

Object.assign(b,a); //copy a to b

b.value=20;

console.log(a);
console.log(b);