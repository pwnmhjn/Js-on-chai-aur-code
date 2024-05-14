# JS and Classes

## OOP

## Object

--Collection of properties and methods

## why use OOP

## Parts of OOP

--Object Literal

-constructor function
-prototypes
-classes
instances(new ,this)

## 4 Pillars

1 Abstraction
2 Encapsulation
3 Inheritance
4 Polymorphism

### 1. Abstraction

**Abstraction** in JavaScript involves creating simple interfaces to complex systems by exposing only necessary details and hiding implementation complexities.

**Example**:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started");
  }

  drive() {
    console.log("Car is driving");
  }
}

// Using the Car class
const myCar = new Car("Toyota", "Corolla");
myCar.startEngine();
myCar.drive();
```

Here, the `Car` class abstracts away the details of how the engine starts and how the car drives, providing a simple interface to the user.

### 2. Encapsulation

**Encapsulation** in JavaScript is achieved by using closures or the `#` symbol to define private fields and methods that are not accessible from outside the class.

**Example**:

```javascript
class Car {
  #make;
  #model;

  constructor(make, model) {
    this.#make = make;
    this.#model = model;
  }

  startEngine() {
    console.log("Engine started");
  }

  drive() {
    console.log("Car is driving");
  }

  getMake() {
    return this.#make;
  }

  getModel() {
    return this.#model;
  }
}

// Using the Car class
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getMake()); // Accessing the make via a method
myCar.startEngine();
myCar.drive();
```

In this example, the `#make` and `#model` fields are encapsulated within the `Car` class and are not directly accessible from outside, ensuring controlled access through methods like `getMake()` and `getModel()`.

### 3. Inheritance

**Inheritance** in JavaScript is implemented using the `extends` keyword, allowing a class to inherit properties and methods from another class.

**Example**:

```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

// Using the Car class, which inherits from Vehicle
const myCar = new Car("Toyota", "Corolla");
myCar.startEngine();
myCar.drive();
```

In this example, the `Car` class inherits from the `Vehicle` class, gaining access to the `startEngine` method, and also defines its own `drive` method.

### 4. Polymorphism

**Polymorphism** in JavaScript allows methods to do different things based on the object it is acting upon, typically achieved via method overriding.

**Example**:

```javascript
class Animal {
  speak() {
    throw new Error("Subclass must implement abstract method");
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

// Using the classes
const animals = [new Dog(), new Cat()];

for (const animal of animals) {
  console.log(animal.speak());
}
```

In this example, both `Dog` and `Cat` classes implement the `speak` method defined in the `Animal` class in their own way. The `speak` method is called polymorphically for different types of animals, demonstrating polymorphism.

These examples illustrate how the four key pillars of OOP—abstraction, encapsulation, inheritance, and polymorphism—can be implemented in JavaScript to create modular, reusable, and maintainable code.
