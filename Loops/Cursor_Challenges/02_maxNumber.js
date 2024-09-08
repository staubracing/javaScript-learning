/*
Challenge 2: Find the Maximum Number
Write a loop to find the maximum number in an array.
*/

let numbers = [3, 7, 2, 5, 10, 6];
let maxNumbers = findMaxNumber(numbers);

function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxNumbers); // Output should be 10
