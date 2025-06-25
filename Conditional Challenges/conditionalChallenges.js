// Challenge 1

const firstObject = { id: 1, name: "Ryan" };
const secondObject = { address: "123 Fake St", phone: "555-555-5555" };
const thirdObject = { ...firstObject, ...secondObject };
console.log(thirdObject);

// Challenge 2

function largestNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(largestNum(9, 12));

// Challenge 3

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCase("I am a sentence"));

// Challenge 4

function alphabeticalOrder(str) {
  return str.toUpperCase().split("").sort().join("").replace(" ", "");
}

console.log(alphabeticalOrder("Hi there"));
