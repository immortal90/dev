const colors = ["blue", "green", "white"];

function iter(item) {
  console.log(item);
}
colors.forEach(iter);

function iterate(item, index, array) {
  console.log(`${item} has index ${index}`);
  if (index === array.length - 1) {
    console.log("The last iteration!");
  }
}
colors.forEach(iterate);

const letters = ["a", "b", "c"];
function iterates(letter) {
  console.log(this === window);
}
letters.forEach(iterates, window);

const Numbers = [22, 3, 4, 10];
let allEven = true;
Numbers.forEach((number) => {
  if (number % 2 !== 0) {
    allEven = false;
  }
});
if (allEven) {
  console.log("Усі числа у масиві є парними.");
} else {
  console.log("Масив містить непарні числа.");
}

const numbers = [22, 3, 4, 10];
const allEvens = numbers.every((number) => number % 2 === 0);
if (allEvens) {
  console.log("Усі числа у масиві є парними.");
} else {
  console.log("Масив містить непарні числа.");
}

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
if (index !== -1) {
  console.log("Індекс першого елемента 'blueberries':", index);
} else {
  console.log("Елемент 'blueberries' не знайдено в масиві.");
}

const arr = [7, 33, 47, 99, 2, 103, 79];
const firstElementGreaterThan10 = arr.find((element) => element > 10);
if (firstElementGreaterThan10 !== undefined) {
  console.log("Перший елемент, більший за 10:", firstElementGreaterThan10);
} else {
  console.log("Жоден елемент не задовольняє умову.");
}

const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some((element) => element % 2 === 0);
if (hasEvenNumber) {
  console.log("У масиві є принаймні одне парне число.");
} else {
  console.log("У масиві немає парних чисел.");
}

const numbers2 = [1, 30, 4, 21, 100000];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
