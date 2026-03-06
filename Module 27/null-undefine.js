let data
console.log(data); // Output: undefined

data = null;
console.log(data); // Output: null

const sum = (number1, number2) => {
    console.log(number1, number2); // Output: 2 undefined
    return number1 + number2;
}

console.log(sum(2))
// Output: NaN (Not a Number) because the second argument is missing and treated as undefined, which cannot be added to a number.

// basic difference between null and undefined
// null is an intentional assignment of a value that represents "no value" or "empty value". It is explicitly set by the programmer to indicate that a variable should have no value.
// undefined, on the other hand, is the default value assigned to a variable that has been declared but not initialized. It indicates that the variable exists but has not been assigned a value yet.