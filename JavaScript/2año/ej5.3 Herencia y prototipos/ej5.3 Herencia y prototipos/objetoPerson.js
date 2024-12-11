// Objeto Person
function Person(firstP, lastP, ageP, genderP, interestsP) {
  // Propiedades
  this.name = {//literal
    first: firstP,
    last: lastP,
  };
  this.age = ageP;
  this.gender = genderP;
  this.insterests = interestsP;

  // MÃ©todos del objeto Person
  this.bio = function () {
    let string = `${this.name.first} tiene ${this.age} aÃ±os. `;
    if (this.insterests.length == 0) {
      string += "No tiene intereses.";
    } else {
      string += "Le interesa: " + this.insterests[0];
      for (let i = 1; i < this.insterests.length; i++) {
        if (i == this.insterests.length - 1) {
          string += " y " + this.insterests[i];
        } else {
          string += ", " + this.insterests[i];
        }
      }
      string += ".";
    }
    console.log(string);
  };
}

// InstanciaciÃ³n de un Objeto Person
let person1 = new Person("Jane", "Doe", 30, "female", [
  "programaciÃ³n",
  "teatro",
  "escalada",
]);
person1.bio();

// CreaciÃ³n de otro Objeto Person a partir de un objeto ya creado.
/* 
Object.create() crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto que se acaba de crear. Este mÃ©todo se utiliza principalmente para implementar la herencia.
*/
let person2 = Object.create(person1);
person2.bio();

// ModificaciÃ³n de propiedades
person2.insterests = ["karate"];
console.log("person2.interests: " + person2.insterests);
console.log("person2.__proto__.interests: " + person2.__proto__.insterests);

person1.insterests = ["fÃºtbol"];
console.log("person1.interests: " + person1.insterests);
console.log("person2.interests: " + person2.insterests);
console.log("person2.__proto__.interests: " + person2.__proto__.insterests);

person1.age = 40;
console.log("person1.age: " + person1.age);
console.log("person2.age: " + person2.age);

/*
La propiedad constructor de una instancia de un objeto Object devuelve una referencia a la funciÃ³n constructora que creÃ³ el objeto. Hay que tener en cuenta que el valor de esta propiedad es una referencia a la propia funciÃ³n, no una cadena que contenga el nombre de la funciÃ³n.
*/
let person3 = new person1.constructor("Jon", "Doe", 20, "male", [
  "violÃ­n",
  "yoga",
]);
person3.bio();
let person4 = new person1.constructor(); // vacÃ­o

Person.prototype.greeting = function () {
  alert("Hola, soy " + this.name.firts + ".");
};

function Employee(first, last, age, gender, insterests, salary) {
  Person.call(this, first, last, age, gender, insterests);
  this.salary = salary;
}
