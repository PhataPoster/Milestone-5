//double equal type coercion in JavaScript

console.log(1 == '1'); 
// true because of type coercion, JavaScript converts the string '1' to a number before comparing.

console.log(0 == false); 
// true because of type coercion, JavaScript converts false to 0 before comparing.  
console.log(true =="1");
// true because of type coercion, JavaScript converts the string '1' to a number before comparing, and true is also converted to 1.
console.log(false == "0");
// true because of type coercion, JavaScript converts false to 0 and the string '0' to a number before comparing.
console.log(false == 0);
// true because of type coercion, JavaScript converts false to 0 before comparing.
console.log(false == "false");
// false because of type coercion, JavaScript converts false to 0 and the string 'false' cannot be converted to a number, so it remains a string.
console.log(null == undefined);
// true because both null and undefined are considered equal in JavaScript.
console.log(NaN == NaN);
// false because NaN is not equal to anything, including itself, in JavaScript.
// type of NaN is object.
console.log(null == 0);
// false because null is converted to 0, but 0 is not equal to 0 in this case.
console.log(undefined == 0);
// false because undefined is converted to NaN, and NaN is not equal to any value, including itself.
console.log([] == false);
// true because of type coercion, JavaScript converts the empty array to an empty string, which is then converted to 0 before comparing with false.
console.log([] == ![]);
// true because of type coercion, JavaScript converts the empty array to an empty string, which is then converted to 0 before comparing with ![], which is false and also converted to 0.
console.log([]==[]);
// false because they are two different array objects in memory, and the equality operator (==) compares their references, not their contents.
