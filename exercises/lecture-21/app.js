let fruits = "apple banana cantaloupe blueberries grapefruit";

fruits = fruits.split(" ");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

for (const fruit of fruits) {
  console.log(fruit);
}

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

let names = ["Batman"];
names.push("Joker");
names.unshift("Joker");

names = ["Batman", "Joker", "Bane"];
names.unshift("Catwoman");

names = ["Batman", "Joker", "Bane"];
names = ["Catwoman", ...names];

names = ["Batman", "Joker", "Bane"];
names.splice(1, 0, "Catwoman");
names.splice(1, 2);

names = ["Batman", "Catwoman", "Joker", "Bane"];
let index = names.indexOf("Catwoman");
if (index !== -1) {
  names.splice(index, 1, "Alfred");
}
index = names.indexOf("Joker");
if (index !== -1) {
  names.splice(index, 1, "Alfred");
}

names = ["Batman", "Catwoman", "Joker", "Bane"];
if (!names.includes("Alfred")) {
  names.push("Alfred");
}

names = ["Batman", "Catwoman", "Joker", "Bane"];
index = names.indexOf("Alfred");
if (index !== -1) {
  names.splice(index, 1);
}
