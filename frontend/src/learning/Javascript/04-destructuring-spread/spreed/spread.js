// Spread array
const fruits = ["Apple", "Banana"];
const newFruits = [...fruits, "Orange", "Mango"];

console.log(newFruits);

// Spread object
const user = {
  name: "Budi",
  age: 20,
};

const newUser = {
  ...user,
  city: "Jakarta",
};

console.log(newUser);
