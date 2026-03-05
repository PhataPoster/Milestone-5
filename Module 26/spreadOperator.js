const max = Math.max(1, 2, 3, 4, 5);
console.log(max);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers); // spread operator


let max2 = Math.max(numbers);
console.log(max2); 

max2=Math.max(...numbers);

console.log(max2); 

function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
console.log(result);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);