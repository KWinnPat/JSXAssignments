// Write a program that prompts the user to guess a randomly generated number between 1 and 100. Keep prompting until the user guesses correctly. It should tell the user if the number is higher or lower then there current guess

function guessTheNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess = parseInt(prompt("Guess a number between 1 and 100:"));

  while (guess !== randomNumber) {
    if (guess < randomNumber) {
      console.log("Higher!");
    } else {
      console.log("Lower!");
    }
    guess = parseInt(prompt("Try again:"));
  }
  console.log("Congratulations! You've guessed the number!");
}

guessTheNumber();

// Write a program that extracts values form an array at specific indices and returns the values in a new array.
// Here is an example of potential output: removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]

function removeByIndex(arr, indices) {
  newArray = [];
  for (let i = 0; i < indices.length; i++) {
    newArray.push(arr[indices[i]]);
  }
  return newArray;
}

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));

// Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and NOT a string data type.
// Here is an example of potential output: numToArray(12345) => [1, 2, 3, 4, 5]

function numToArray(num) {
  array = [];
  numcopy = num.toString();
  for (let i = 0; i < numcopy.length; i++) {
    array.push(parseInt(numcopy[i]));
  }
  console.log(array);
}
numToArray(12345);

// Write a program to create a new matrix of arrays from two arrays of numbers and strings.

function createMatrix(arr1, arr2) {
  const matrix = [];
  for (let i = 0; i < arr1.length; i++) {
    matrix.push([arr1[i], arr2[i]]);
  }
  return matrix;
}
console.log(createMatrix([1, 2, 3], ["a", "b", "c"]));
