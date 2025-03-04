//Factory function are to create new object, reduce code dup and need for Copy & paste
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

console.log(dog);

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
    name, //if the key and value have the same name you can reduce redandunce
    breed,
    age,
    weightKg,
    eat(){ 
          console.log("Chomp!");
        },
    bark(){
      console.log("Woof!");
    }
  }
}

const anotherDog = getDog("Marley","Chocolate Lab",3,20);
console.log(anotherDog);