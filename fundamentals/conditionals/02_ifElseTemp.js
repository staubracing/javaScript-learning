let temp = 15;
let result;

if (temp <= 0) {
  result = 'Freezing';
} else if (temp >= 0 && temp <= 15) {
  result = 'Cold';
} else if (temp >= 16 && temp <= 30) {
  result = 'warm';
} else {
  result = 'Hot';
}
console.log(result);
