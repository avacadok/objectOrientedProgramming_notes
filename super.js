//Problrm:Sometimes you want a subclass to have similar but slightly different behaviour to its superclass. In our scenario, what if we want all mentor bios to start with "I'm a mentor at Lighthouse Labs."
//before saying the "My name is ..." bit?

//Method Override
// Superclass
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// Subclass
class Mentor extends Person {
  // Completely re-define the bio method since it has more to say
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
  // bio() {
  //   return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  // }
}

// The Student class doesn't need to define bio since it can just use the one from Person

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs(aka Labber). ${super.bio()}`;
  }
}

const snowie = new Student("Snowie", "I nap a loooot.");
console.log(snowie.bio());
