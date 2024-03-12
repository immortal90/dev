let str1 = "I'm a string!";
let str2 = "I'm a string!";

console.log(str1 == str2); // true
console.log(str1 === str2); // true

let string5 = "Hello World";
let firstCharacter = string5.charAt(0);
console.log(firstCharacter);

let str3 = "Hello Javascript";
let characterJ = str3[6];
console.log(characterJ);

let str = "Hello";
let lastChar1 = str[str.length - 1];
let lastChar2 = str.charAt(str.length - 1);

function lastChar3(str) {
  return str[str.length - 1];
}
function lastChar4(str) {
  return str.charAt(str.length - 1);
}
function lastChar5(str) {
  return str.substring(str.length - 1);
}

let a = "When candles are out,";
let b = "all cats are grey.";

let result = a.concat(" ", b);
console.log(result);

let fact = "Fifteen is the same as";
let c = 5;
let d = 10;

fact += ` ${c + d}`;

console.log(fact);

let firstName = "Tom";
let lastName = "Cat";

let fullName = getFullName(firstName, lastName);
console.log(fullName);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function greeting(firstName, lastName) {
  let fullName = getFullName(firstName, lastName);
  return `<div><h1>Hello, ${fullName}!</h1></div>`;
}

let template = greeting(firstName, lastName);
console.log(template);

let string1 = "  The name of our game  ";

let result1 = string1.trim();

let result2 = string1.trimRight();

let result3 = string1.trimLeft();

console.log(result1);
console.log(result2);
console.log(result3);

const phoneNumber = "\t  555-123\n ";

let result4 = phoneNumber.replace(/\s/g, "");

console.log(result4);
console.log(phoneNumber);

let sentence = "Always look on the bright side of life";

if (sentence.includes("look up")) {
  console.log("Рядок містить 'look up'");
} else {
  console.log("Рядок не містить 'look up'");
}

if (sentence.includes("look on")) {
  console.log("Рядок містить 'look up'");
} else {
  console.log("Рядок не містить 'look up'");
}

let searchString = "look on";
let startIndex = 7;

let index = sentence.indexOf(searchString, startIndex);
if (index !== -1) {
  console.log('Рядок містить "look on" починаючи з 8-ї позиції.');
} else {
  console.log('Рядок НЕ містить "look on" починаючи з 8-ї позиції.');
}

let indexl = sentence.indexOf("l");

console.log('Індекс першого символу "l" в рядку:', indexl);

let indexl3 = sentence.indexOf("l", 3);

console.log('Індекс символу "l" починаючи з 3-ї позиції:', indexl3);

let indexL = sentence.indexOf("L");

console.log('Індекс символу "L":', indexL);

let substring = sentence.substring(7);
console.log(substring);

let substring1 = sentence.substring(0, 6);
console.log(substring1);

let substring2 = sentence.slice(7, 11);
console.log(substring2);

/^[a-z0-9_-]{8,16}$/;

/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

let sentenceSecond =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";

function truncateText(sentence) {
  if (sentence.length > 50) {
    return sentence.substring(0, 50) + "...";
  } else {
    return sentence;
  }
}

function truncateText(sentence) {
  if (sentence.length > 50) {
    return sentence.substr(0, 50) + "...";
  } else {
    return sentence;
  }
}
