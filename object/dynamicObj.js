//Objects are dynamic, you can add,remove,edit properties

const person = { //const means that you cannot change "person" variable, but you can change the object inside
  name: "Steven"
}

person.favouriteFood="Pasta";
console.log(person);

person["favouriteIceCream"] = "chocolate";
console.log(person);

delete person.favouriteIceCream;
console.log(person);

person.eat = function(){
  console.log("Start eating");
}

person.eat();