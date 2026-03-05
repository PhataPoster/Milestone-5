const aboutMe = {
    name: "Ashikur Rahman",
    age: 24,
    profession: "Software Engineer",
    hobbies: ["Coding", "Traveling", "Cooking"],
    address: {
        street: "123 Main St",
        city: "Dhaka",
        country: "Bangladesh"
    }
}

// Dot Notation
console.log(aboutMe.name);
console.log(aboutMe.age);
console.log(aboutMe.profession);
console.log(aboutMe.hobbies);
console.log(aboutMe.address.city);
// Bracket Notation
console.log(aboutMe["name"]);
console.log(aboutMe["age"]);
console.log(aboutMe["profession"]);
console.log(aboutMe["hobbies"]);
console.log(aboutMe["address"]["city"]);

const propertyName = "name";
console.log(aboutMe[propertyName]); // Accessing the name property using a variable with bracket notation