const names = ["Alice", "Bob", "Charlie", "David", "Ave"];
// filter method returns all element that satisfy the condition

const startwithA = names.filter(name => name[0]==="A");

console.log(startwithA);

// find method returns the first element that satisfy the condition

const students = [
    {id: 1, name: "Alice", age: 20},
    {id: 2, name: "Bob", age: 22},
    {id: 3, name: "Charlie", age: 21},
    {id: 4, name: "David", age: 23},
    {id: 5, name: "Eve", age: 20}
]

const student = students.find(student => student.age > 20);

console.log(student);


const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum,number)=> sum + number, 0);
console.log(total);
