// Mapping Quiz

let a = [1, 2, 3];
let b = a.map(x => x * 2);

console.log('The sum of the elements in arrays b and a is: ' + (b[2] + a[2]));

// This will log the entire array 'b' with explanation
console.log('This is the mapping array b: ' + b);

// This will log the value of the 3rd element in the array 'b' with explanation
console.log('The element in the mapping array b is: ' + b[2]);

// Iterate over the array 'b' and log each element to the console with an explanation using a forEach loop
b.forEach(function (element) {
    console.log('Element from array b: ' + element);
});
