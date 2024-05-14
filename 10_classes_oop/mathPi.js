// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);
// console.log(descriptor);

// myNewObj = Object.create();

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  OrderChai: function () {
    console.log("code fat gya");
  },
};

// const descriptor = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(descriptor);

Object.defineProperty(chai, "name", {
  writable: true,
  enumerable: true,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(key, value);
}
