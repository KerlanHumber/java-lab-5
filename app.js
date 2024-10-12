import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
addAndLogUpper(10, 20); // Output: 30
function findMaxMultiplyAndLog(arr, multiplier) {
    const max = findMax(arr);
    const result = multiply(max, multiplier);
    console.log(toUpperCase(result.toString()));
}
// Test the combined function
const numbers = [10, 5, 25, 8];
const multiplier = 2;

findMaxMultiplyAndLog(numbers, multiplier);


// Call the functions and log results
console.log('Multiply: ', multiply(4, 5)); // Output: 20
console.log('Add: ', add(5, 3)); // Output: 8
console.log('Subtract: ', subtract(10, 2)); // Output: 8
console.log('Uppercase: ', toUpperCase('hello')); // Output: HELLO
console.log('Lowercase: ', toLowerCase('WORLD')); // Output: world
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray




