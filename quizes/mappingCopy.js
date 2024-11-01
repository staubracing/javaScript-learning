// Mapping Quiz

function getOrdinalIndicator(i) {
    const j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

let a = [1, 2, 3];
let b = a.map(x => x * 2);

// Instead of hardcoding 'third', calculate it based on the index
console.log('The ' + getOrdinalIndicator(3) + ' element in the mapping array b is: ' + b[2]);


console.log('The sum of the elements in arrays b and a is: ' + (b[2] + a[2]));

// This will log the entire array 'b' with explanation
console.log('This is the mapping array b: ' + b);

// This will log the value of the 3rd element in the array 'b' with explanation
console.log('The element in the mapping array b is: ' + b[2]);

// Iterate over the array 'b' and log each element to the console with an explanation using a forEach loop
b.forEach(function (element) {
    console.log('Element from array b: ' + element);
});
