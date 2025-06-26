// Write a program that takes an array of words and returns the longest word.
// ['a'. 'b', 'cc'] => 'cc'

function longestWord(words) {
  longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord(["a", "b", "cc", "ddd"]));

// Write a program that swaps the first and last characters of a string.
// 'ryan' => 'nyar'
function swapFirstLast(str) {
  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

// Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6

function sumOfNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumOfNumbers([1, 2, 3]));

// Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

function combineArrays(arr1, arr2) {
  const combined = [];
  const length = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    if (i < arr1.length) {
      combined.push(arr1[i]);
    }
    if (i < arr2.length) {
      combined.push(arr2[i]);
    }
  }

  return combined;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// ***Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(titleCase("I am a sentence"));

// Return longest word in a string
// EX: "This string has several different values" => "different"

function longestWordInString(str) {
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
console.log(longestWordInString("This string has several different values"));

// ***Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

function alphabeticalOrder(str) {
  return str.replace(" ", "").toLowerCase().split("").sort().join("");
}
console.log(alphabeticalOrder("Hi there"));

// ***Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices fo the array (index 1 and index 3)
// [b, d] is the new array returned from the specified indices.

function removeByIndex(arr, indices) {
  newArray = [];
  for (let i = 0; i < indices.length; i++) {
    newArray.push(arr[indices[i]]);
  }
  return newArray;
}

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));

// Complete the following steps:
// Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
// the userName property should take any string value.
// the starter (or default) for the activeStatus property should be set to 'away'.
// Write an arrow function
// that changes the activeStatus to 'active'
// returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'

// Note: Use string interpolation. Avoid hardcoding this.

function createUser(userName) {
  const user = {
    userName: userName,
    activeStatus: "away",
  };

  const login = () => {
    user.activeStatus = "active";
    return `${user.userName} is ${user.activeStatus}`;
  };

  return login;
}

const userLogin = createUser("ryan");

// Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

function pow(base, exponent) {
  for (let i = 1, result = base; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(pow(4, 2));
