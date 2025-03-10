const numbers = [5,4,3,2,1,3];

const indexOfThree = numbers.indexOf(3); //returns an integer, .indexOf search from left to right
// console.log(numbers[indexOfThree]);

const lastIndexOfThree = numbers.lastIndexOf(3);
// console.log(lastIndexOfThree);

const indexOfTen = numbers.lastIndexOf(10); //if the argument D.N.E, the method will return -1
// console.log(indexOfTen); // this will return -1
// console.log(numbers[indexOfTen]); // this will return undefined

if ( indexOfTen !== -1){ //if found 10
  console.log('10 is found in array');
}

if (!numbers.includes(10)){ //if not found 10
  console.log("10 is not found.")
}