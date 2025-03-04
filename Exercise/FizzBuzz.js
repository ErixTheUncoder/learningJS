//Accept a number
//return "FizzBuzz" if divisible by 3 & 5
//return "Fizz" if only dividable by 3 only
//return "Buzz" if only dividable by 5 only
//return original Num if both condition not sastified

function FizzBuzz(Num1){
  if(Num1%3===0 && Num1%5===0){
    return "FizzBuzz";
  } else if(Num1%3===0){
    return "Fizz";
  }else if(Num1%5===0){
    return "Buzz";
  }else{
    return Num1;
  }
}

console.log(FizzBuzz(5));