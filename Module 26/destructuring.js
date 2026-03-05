// const Phone = {
//     name: "iPhone",
//     price: 999,
//     color: "black"
// }

// Destructuring
const {name,price,color,camera = "12MP"} ={
    name: "iPhone",
    price: 999,
    color: "black",
    camera: "50MP"
}

console.log(name);
console.log(price);
console.log(color);
console.log(camera); // 50MP


// Array Destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]