//JS objects are to store key value PAIRS, such as state(properties) and behaviour(functions)aka. method
const dog = {
  name: "Max",
  breed: "Dachshund",
  age: 5,
  weightKg: 4,
  eat: function(){
    console.log("Chomp!");
  },
  bark(){
    console.log("Woof!");
  }
}

// const anotherDog = {
//   name: "Marley",
//   breed: "Chocolate",
//   age: 3,
//   weightKg: 10,
//   eat: function(){
//     console.log("Chomp!");
//   },
//   bark(){
//     console.log("Woof!");
//   }
// }

function getDog(name,breed,age,weightKg){
  return{
    name:name,
    breed:breed,
    age:age,
    weightKg:weightKg,
    eat(){ 
          console.log("Chomp!");
        },
    bark(){
      console.log("Woof!");
    }
  }
}

const anotherDog = getDog("Marley","Chocolate Lab",3,20)