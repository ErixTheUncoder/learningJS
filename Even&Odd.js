//Implement 2 function
//First function accepts array, then console log the even nums
//Second func accepts array, then console log the odd nums

function EvenNums(array){
  for(let number=0;number<array.length;number++){
    if(array[number]%2===0){
      console.log(array[number]);
    }
  }
}

function OddNums(array){
  for(let number=0;number<array.length;number++){
    if(array[number]%2!==0){
      console.log(array[number]);
    }
  }
}

let arrNum = [3,2,1,4,5,6,78,9,8,0,10];
console.log("Even numbers are,");
EvenNums(arrNum);
console.log("Odd numbers are");
OddNums(arrNum);