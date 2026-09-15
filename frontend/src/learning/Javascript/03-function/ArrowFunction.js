// Function biasa
function sayHello() {
  console.log("Hello");
}
sayHello();

// Arrow function
const sayHelloArrow = () => {
  console.log("Hello");
};

sayHelloArrow();

// Parameter
const greet = (name) => {
  console.log(`Hello ${name}`);
};

greet("Budi");

// Return
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

// Implicit return
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));
