// for primitive data type, the value is passed by value, which means a copy of the value is passed to the function.
let a =10;
let b= 20;

function changeValue(a,b){
    a = 20 
    b = 10
    return a,b;

} 

console.log("before function caall",a,b); // Output: 10 20
changeValue(a,b);
console.log("after function call",a,b); // Output: 10 20\


// for non-primitive data type, the value is passed by reference, which means a reference to the value is passed to the function.
const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
function changeValue2(number1,number2){
    number1.push(4);
    number2.push(7);
    return number1,number2;
}   

console.log("before function call",number1,number2); // Output: [1, 2, 3] [4, 5, 6]
changeValue2(number1,number2);
console.log("after function call",number1,number2); // Output: [1, 2, 3, 4] [4, 5, 6, 7]    