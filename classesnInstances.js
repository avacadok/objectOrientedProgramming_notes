class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
//pizza1 and pizza2 are pizza objects. When you create an object using a class, it is an instance of that class.
//So pizza1 and pizza2 are instances of the Pizza class.
let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

//Any new instance of the Pizza class will really behave the same way as this:
const pizza01 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
};

const pizza02 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
};
//-------------------------------------
//customizing the cx
class Pizzza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizzza = new Pizzza('large', 'thin');

//so we created a pizza instance and its properties are:
let pizzza01 = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
};

//-------------------------------------
class SomeClass {
  methodName(parameters) {
    // this is a method
  }

  someMethod() {
    this.hello = "hi"; // Created a property called hello
  }
}
