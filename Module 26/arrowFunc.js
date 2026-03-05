// normal function

function add(num1,num2){
    return num1+num2;
}

// arrow function

const add2 = (num1,num2) => num1+num2;

const greaterValue = (num1,num2) =>num1>num2? "num1 is greater":"num2 is greater";

const result = add(5,10);
console.log(result);
const result2 = add2(5,10);
console.log(result2);

const result3 = greaterValue(5,10);
console.log(result3);