// Challenge 01: Reverse a String ( no built in functions )

function reverseString(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  console.log(revString);
  return revString;
}
reverseString("hello");
