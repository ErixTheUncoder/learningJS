const course = {
  name: 'Javacript for Beginners',
  duration: 3,
  difficulty: 2
};

// console.log(course.name);
// console.log(course.duration);
// console.log(course.difficulty);

for(const key in course){
  console.log(course[key]);
}