/*
Challenge Recap: Reverse a String
Task:
Write a for loop to reverse a string. For example, given "JavaScript", the loop should output "tpircSavaJ".

Hint:
You can build the reversed string by iterating through the original string from the last character to the first.
Start with an empty string and concatenate each character from the end of the original string to this new string.

Here’s a general approach without revealing the code:
1. Start your loop from the last index of the string (i.e., str.length - 1).
2. Use a loop that decrements until it reaches the first character.
3. Concatenate each character to a new string as you go.
*/

let str = 'JavaScript';
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);
