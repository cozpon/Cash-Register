 console.log("sanity check");


var calculator = calculatorModule();
var currentNumber = null;
// have to do wierd stuff with STATE VARIABLE
// i want users to be able to add 125 + 45 
var currentNumbers = []; // every time we initiate an operation (add or subtract), clear this!
var currentOperator = null;




var keys = document.querySelectorAll(".keys");
var calculatorFramework = document.querySelector(".calculatorFramework");

function clearCurrentNumbers(){
    //resets current internal state
    currentNumbers = [];
};




// hitting all the KEY ID's, querySelectorALL makes it a DOM collection
function addKeyClickHandlers(key){
    key.addEventListener("click", function(event){
    console.log("What NUMBER am I?", event.currentTarget.dataset.number); 
    var numberValue = parseInt(event.currentTarget.dataset.number);
    // This is how to do it below:
    currentNumbers.push(numberValue);
    // var currentNumberToLoad = parseInt(currentNumbers.join("")); 
    // validate your assumtions (WHEN DEBUGGING)
    //console.log(currentNumberToLoad)
    //calculator.load(currentNumberToLoad);
    });
};

keys.forEach(addKeyClickHandlers);
   



var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(event){
    console.log("Add Me");
    // don't ADD yet ---- calculator.add(5);
    // my intention is to eventually add two numbers
    currentOperation = "add";

    // save the current set of numbers inputted by user
    var currentNumberToLoad = parseInt(currentNumbers.join('')); // 125

    calculator.load(currentNumberToLoad);

    clearCurrentNumbers();
});

var subtractButton = document.getElementById("subtractButton");
subtractButton.addEventListener("click", function(event){
    console.log("Subtract Me");
    // don't ADD yet ---- calculator.add(5);
    // my intention is to eventually add two numbers
    currentOperation = "subtract";

    // save the current set of numbers inputted by user
    var currentNumberToLoad = parseInt(currentNumbers.join('')); // 125

    calculator.load(currentNumberToLoad);

    clearCurrentNumbers();
});

var equalButton = document.getElementById("equalButton");
equalButton.addEventListener("click", function(event){
    console.log("GET result");
    
    //when user hits EQUAL check what current operation is
    if(currentOperation === "add"){
        console.log("WILL DO ADDING");
        console.log("calculator total", calculator.getTotal());

        var currentNumberToLoad = parseInt(currentNumbers.join("")); //456
        calculator.add(currentNumberToLoad)
        }
    else if(currentOperation === "subtract"){
        console.log("WILL SUBTRACT");
        console.log("calculator total", calculator.getTotal());

        var currentNumberToLoad = parseInt(currentNumbers.join("")); //456
        calculator.subtract(currentNumberToLoad)
        }

    var result = calculator.getTotal();
    console.log("result", result);
    clearCurrentNumbers();
});




/*
//adding a new button FOR FUN --- DELETE LATER
var fictionalNumber = document.createElement("div");
fictionalNumber.innerHTML = "0x0f";
fictionalNumber.dataset.number = 15;
//just by saying dataset you can add data to any atribute
fictionalNumber.dataset.mustBeAValidVariableName = "cat";

calculatorFramework.appendChild(fictionalNumber);
*/










//do it the long way first, and then Refactor (taking existing working code, not changing the behaviour, just improving the code. being DRY (don't repeat yourself))



