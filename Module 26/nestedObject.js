const employee = {
    name : "ashikur rahman",
    age : 30,
    position : "Software Engineer",
    company : "Tech Company",
    address : {
        // street : "123 Main St",
        city : "Dhaka",
        country : "Bangladesh"
    },
    experience :"20 years"
}

console.log(employee.name); // Accessing the name property
console.log(employee.address.city); // Accessing the city property of the nested address object
console.log(employee.address.country); // Accessing the country property of the nested address object
console.log(employee.address?.street); // Accessing the street property of the nested address object using optional chaining