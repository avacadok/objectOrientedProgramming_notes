class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
  }

  getSize() {
    return this.size;
  }

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

}

// let pizza1 = new Pizza('large', 'thin');

//so we created a pizza instance and its properties are:
// let pizza1 = {
//   size: 'large',
//   crust: 'thin',
//   toppings: ["cheese"]
// };

const pizza = new Pizza();
pizza.setSize('l');
pizza.addTopping("ham");
//it will return undefined if we did not enter the size provided above
console.log(pizza.getSize()); // m
console.log(pizza.getPrice());
console.log(pizza);

//----------------------------------
//implement Getter and Setter
class Pizza1 {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }


  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }
  //setter allows for data validation before updating information
  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

let pizza1 = new Pizza1("s", "hard");
pizza1.size = 's'; // instead of setSize(size)
pizza1.price;      // instead of getPrice()
pizza1.addTopping("ham");

console.log(pizza.size);
console.log(pizza1);
console.log(pizza1.price);