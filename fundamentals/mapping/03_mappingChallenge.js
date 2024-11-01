// Challenge 03: Transforming Array Elements

// Instructions:
// 1. Use the `.map()` method to iterate over the `numbers` array.
// 2. Inside the `.map()` function, apply the rules to transform each number.
//    - If the number is even, multiply it by 2.
//    - If the number is odd, multiply it by 3.
// 3. Store the resulting array in a variable called `transformedNumbers`.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let transformedNumbers = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num * 3;
  }
});

console.log(transformedNumbers);
