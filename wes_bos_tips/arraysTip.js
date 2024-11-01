// Arrays as Objects

const bikes = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Ducati'];

// Grab the first and last item of an array with Object destructuring

// const { length, 0: first, [length - 1]: last } = bikes;
// console.log(first, last); // Honda, Ducati

// // What?! How?! Array _are_ objects

// // 1. You can use Object destructuring on an array, using the index as a property
// const { 2: middle } = bikes;
// console.log(middle); // Suzuki

// // 2. Arrays have a length property, which can be destructured along with indexes
// const { 0: first, length } = bikes;
// console.log(first, length); // Honda, 5

// 3. Destructuring allows us to use it's variables right inside
// Computed property names allow us to reference the length and calculate the index of the last item
// const { length, 0: first, [length - 1]: last } = bikes;
// We _can_ go bananas with this. Don't angry tweet me, I know this is a bit much
const { length, [Math.floor(length / 2)]: middle } = bikes;
console.log(middle); // Suzuki

// 4. Neat!
