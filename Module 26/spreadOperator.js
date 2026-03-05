const max = Math.max(1, 2, 3, 4, 5);
console.log(max);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers); // spread operator


let max2 = Math.max(numbers);
console.log(max2); 

max2=Math.max(...numbers);

console.log(max2); 