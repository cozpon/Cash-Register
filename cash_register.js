 console.log("sanity check");

//Connects to calculator.js
var calculator = calculatorModule();
var currentNumbers = []; // every time we initiate an operation (add or subtract), clear this!
var currentOperation = null;




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
    var numberValue = parseFloat(event.currentTarget.dataset.number);
    currentNumbers.push(numberValue);
    });
};

keys.forEach(addKeyClickHandlers);
   

/////////////////////////// CALCULATOR OPERATIONS

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(event){
    console.log("Add Me");
    currentOperation = "add";
    //Changes currentOperation from null to "add" in equalsButton loop

    // save the current set of numbers inputted by user
    var currentNumberToLoad = parseFloat(currentNumbers.join('')); // 125

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
    var currentNumberToLoad = parseFloat(currentNumbers.join('')); // 125

    calculator.load(currentNumberToLoad);

    clearCurrentNumbers();
});

var multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.addEventListener("click", function(event){
        console.log("MULTIPLY");
        currentOperation = "multiply";
        var currentNumberToLoad = parseFloat(currentNumbers.join(''));
        calculator.load(currentNumberToLoad);
        clearCurrentNumbers();
});

var divideButton = document.getElementById("divideButton");
    divideButton.addEventListener("click", function(event){
        console.log("DIVIDE");
        currentOperation = "divide";
        var currentNumberToLoad = parseFloat(currentNumbers.join(''));
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

        var currentNumberToLoad = parseFloat(currentNumbers.join("")); //456
        calculator.add(currentNumberToLoad)
        };

    if(currentOperation === "subtract"){
        console.log("WILL SUBTRACT");
        console.log("calculator total", calculator.getTotal());

        var currentNumberToLoad = parseFloat(currentNumbers.join("")); //456
        calculator.subtract(currentNumberToLoad)
        };

    if(currentOperation === "multiply"){
        console.log("WILL MULTIPLY");
        console.log("calculator total", calculator.getTotal());

        var currentNumberToLoad = parseFloat(currentNumbers.join(""));
        calculator.multiply(currentNumberToLoad)
    };

     if(currentOperation === "divide"){
        console.log("WILL MULTIPLY");
        console.log("calculator total", calculator.getTotal());

        var currentNumberToLoad = parseFloat(currentNumbers.join(""));
        calculator.divide(currentNumberToLoad)
    };


    var result = calculator.getTotal();
    console.log("result", result);
    clearCurrentNumbers();


// OUTPUTS RESULT INTO HTML
 document.querySelector(DOMstrings.numberHolder).value = result;




});


var DOMstrings = {
      numberHolder: ".numberHolder"
  }

/*
//adding a new button FOR FUN --- DELETE LATER
var fictionalNumber = document.createElement("div");
fictionalNumber.innerHTML = "0x0f";
fictionalNumber.dataset.number = 15;
//just by saying dataset you can add data to any atribute
fictionalNumber.dataset.mustBeAValidVariableName = "cat";

calculatorFramework.appendChild(fictionalNumber);
*/


