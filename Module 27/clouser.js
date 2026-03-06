function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function");
    }
    return innerFunction; // Returning the inner function to create a closure
}

const closureFunction = outerFunction(); // Calling the outer function to get the inner function
closureFunction(); // This will call the inner function and print "This is the inner function"


function createCounter(owner){
    let count =0;
    function increment(){
        count++;
        console.log("Count for " + owner + ": " + count);
    }
    return increment;
}

const rohimCounter = createCounter("Rohim");
rohimCounter(); // Count for Rohim: 1
rohimCounter(); // Count for Rohim: 2
rohimCounter(); // Count for Rohim: 3

const karimCounter = createCounter("karim");
karimCounter(); // Count for karim: 1
karimCounter(); // Count for karim: 2

rohimCounter(); 
rohimCounter();

karimCounter();