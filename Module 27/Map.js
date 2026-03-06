const numbers = [1, 2, 3, 4, 5];

const squaredIt = num => num * num;

const squaredNumbers = numbers.map(squaredIt);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25] 

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]

numbers.forEach(number => console.log(number)); // Output: 1 2 3 4 5 