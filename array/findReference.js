const employees = [
  {
    id:1,
    name:'John'
  },
  {
    id:2,
    name:'Michael Jackson'
  },
  {
    id:3,
    name:'Que'
  },
];

const employee = employees.find(function(i){
  return i.name ==='John'
});
console.log(employee);