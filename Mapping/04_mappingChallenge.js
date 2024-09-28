// Challenge 04: Title Case Conversion

// Instructions:
// 1. Use the `.map()` method to iterate over the `phrases` array.
// 2. For each phrase, split it into individual words, capitalize the first letter of each word, and join them back together.
// 3. Store the resulting array in a variable called `titleCasedPhrases`.

let phrases = [
  'hello world',
  'javascript is fun',
  'map is useful',
  'coding challenges',
];

let titleCasedPhrases = phrases.map((phrase) => {
  // Split the phrase into an array of words
  let words = phrase.split(' ');

  // Map over each word to capitalize the first letter
  let capitalizedWords = words.map((word) => {
    // Capitalize the first letter and concatenate with the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(' ');
});

console.log(titleCasedPhrases); // Expected output: ["Hello World", "Javascript Is Fun", "Map Is Useful", "Coding Challenges"]
