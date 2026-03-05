function add(num1,num2=0){
    console.log(num1,num2);
    return num1+num2;

}

function multiply(num1,num2=1){
    console.log(num1,num2);
    return num1*num2;
}


const result = add(5);
console.log(result);

const result2 = multiply(5);
console.log(result2);

/*

*string --> '' or " "
*number --> 0[for addition], 1[for multiplication]
*boolean --> false
*object --> {}
*array --> []
*boolean --> false

*/

