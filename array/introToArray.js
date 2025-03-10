const numbers = [5,4,3,2,1]; //you cannot reassign the variable, but you can modify it. (Arrays)

// numbers.push(7,8,9); //.push add value to the back of the array
// console.log(numbers);

// numbers.unshift(10,15,9); //.unshift adds value to the front of the array
// console.log(numbers);

numbers.splice(1,0,25,24); //.splice adds/delete elements in the middle, (ArrayIndex,deleteElementCount,addElement..)
console.log(numbers);