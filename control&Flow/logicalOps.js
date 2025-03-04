console.log(true||false);
console.log(true&&true);
console.log(!true);
console.log((true||false)&&false + ' Ops 4');

//null coalescing Operator, ??

let a = null;
const result = a ?? false; //right side is the default value
const resultAlt = (a!== null && a!== undefined) ? a:false ;

console.log(result);
console.log(resultAlt);
