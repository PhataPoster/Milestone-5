const number = 42;

function printNumber() {
    console.log(number); // This will print 42 because the variable 'number' is accessible within this function due to scope.
}
printNumber();

function outerFunction() {
    const outerVariable = "I am from the outer function";
    function innerFunction() {
        console.log(outerVariable); // This will print "I am from the outer function" because innerFunction has access to variables in its outer scope.
    }

    innerFunction();
}
outerFunction();