// How can unary operators such as increment (++) and decrement (--) be effectively used in loops to manipulate variables within the iteration process?

// Keeps iteration clean and simple, allowing for straightforward variable manipulation without complexity.

// Compare and contrast the usage of the for, for-of, and for-in loops in JavaScript, highlighting their specific applications and scenarios where each loop type is most suitable.

//for: anything with numbers
//for-of: iterable objects (arrays, strings, etc.)
//for-in: for object literals (dictionaries)

// Create a for loop to log all even numbers between 1 and 20 (inclusive) to the console. Make use of the increment (++) and modulo (%) operators to identify even numbers.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use a for-of loop to iterate over each character in a string and check if it is a vowel (consider both uppercase and lowercase). Log the total count of vowels to the console.

const str = "Hello World!";
let vowelCount = 0;
for (const char of str) {
  if ("aeiouAEIOU".includes(char)) {
    vowelCount++;
  }
}
console.log(`Total vowels: ${vowelCount}`);

// Log all the key-value pairs of an object literal to the console using a for-in loop. Create an object with at least five properties, and use the loop to log each property's key and value.

const obj = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
  city: "New York",
  country: "USA",
};
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
