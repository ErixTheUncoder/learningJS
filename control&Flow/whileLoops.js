let numbers = [1,2,3,4,5,6,7,8,9];
let index = 0;

while(index<numbers.length){
  console.log(numbers[index]);
  index++;
}

let n = 0;
while(true){
  console.log('Loop');
  n++
  if(n===10){
    console.log("Stop");
    break;
  }
}