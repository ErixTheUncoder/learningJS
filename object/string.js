const name = "Steven";
console.log(typeof name);

// const anotherName = new String("Joe");
// console.log(typeof anotherName);

let sentence =" A new sentence. ";

const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew);

console.log(sentence[3]); //Array/strings

const startsWithA = sentence.startsWith('A'); //Boolean
console.log(startsWithA);

const endsWithA = sentence.endsWith('A'); //Boolean
console.log(endsWithA);

const updateSentence = sentence.replace('new','short');
console.log(updateSentence);

const trimSentence = sentence.trim();
console.log(trimSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);

let email = 'TesTEmailgmail.com';

let lowerCaseEmail = email.toLowerCase();
console.log(lowerCaseEmail);

let upperCaseEmail = email.toUpperCase();
console.log(upperCaseEmail);