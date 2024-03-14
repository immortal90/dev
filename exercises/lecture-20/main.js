let person = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 30,
  bio: function () {
    console.log("Name:", this.name.firstName, this.name.lastName);
    console.log("Age:", this.age);
  },
  introduceSelf: function () {
    console.log("Hi! I'm", this.name.firstName);
  },
};

person.bio();
person.introduceSelf();

function createPerson(name) {
  return {
    name: name,
    introduceSelf: function () {
      console.log("Hi! I'm", this.name);
    },
  };
}

let person1 = createPerson("John");
let person2 = createPerson("Alice");

person1.introduceSelf();
person2.introduceSelf();

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log("Hi! I'm", this.name);
  };
}

let mary = new Person("Mary");
mary.introduceSelf();

let tom = new Person("Tom");
tom.introduceSelf();

let hasProp = "prop" in mary;
console.log(hasProp);

function DirtyMartini() {
  this.ingredients = {
    gin: "6 fluid ounces gin",
    vermouth: "1 dash dry vermouth",
    brine: "1 fluid ounce brine from olive jar",
    olives: "4 stuffed green olives",
  };

  this.english_please = function () {
    console.log("ingredients:");
    for (let key in this.ingredients) {
      if (key === "vermouth") {
        console.log(this.ingredients[key] + " (0.0351951ml)");
      } else {
        console.log(this.ingredients[key]);
      }
    }
  };

  this.excuse_my_french = function () {
    console.log("ingrédients:");
    for (let key in this.ingredients) {
      if (key === "gin") {
        console.log("170.4786 ml de " + key);
      } else if (key === "vermouth") {
        console.log("1 trait de vermouth sec (0.0351951ml)");
      } else if (key === "brine") {
        console.log("28.4131 ml de saumure du pot d'olive");
      } else {
        console.log("4 olives vertes farcies");
      }
    }
  };
}

let martini = new DirtyMartini();
martini.english_please();
console.log("\n");
martini.excuse_my_french();
