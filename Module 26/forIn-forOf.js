const numbers = [1, 2, 3, 4, 5];

for(const number of numbers){
    console.log(number);
}

const person = {
    name : "Ashikur Rahman",
    age : 30,
    city : "Dhaka"
}  

for( const key in person){
    const value = person[key];
    console.log(`${key} : ${value}`);
}