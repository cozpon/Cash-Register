 console.log("sanity check");

// Connects to calculator.js
var calculator = calculatorModule();
var currentNumbers = []; // every time we initiate an operation (add or subtract), clear this!
var currentOperation = null;
var keys = document.querySelectorAll(".keys");
var calculatorFramework = document.querySelector(".calculatorFramework");
 // resets current internal state
function clearCurrentNumbers(){
    currentNumbers = [];
};













// `[clear]` will clear the display
// `[get balance]` will display the current balance
// `[deposit cash]` will add the amount currently in the `( display )` to the cash register, then clears the display
// `[withdraw cash]` will remove the amount currently in the `( display )` to the cash register, then clears the display
// FOR STORAGE, MAKE A SEPARATE STORAGE CONTAINER AND INSTEAD OF CLEARING CURRENT NUMBERS AFTER EACH FUNCTION RUNS,
// STORE THE NUMBER INSIDE OF THE CONTAINER INSTEAD
















// hitting all the KEY ID's, querySelectorALL makes it a DOM collection
function addKeyClickHandlers(key){
    key.addEventListener("click", function(event){
      var stringValue = event.currentTarget.dataset.number;
      console.log("This Numer Is, ", stringValue);
      currentNumbers.push(stringValue);
      // Shows clicked number in UI
      document.querySelector(DOMstrings.numberHolder).value = currentNumbers.join('');

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
    var currentNumberToLoad = parseFloat(currentNumbers.join('')); // ["1", "2", "5"] --> "125"
    // loads current number into calculator
    calculator.load(currentNumberToLoad);

    clearCurrentNumbers();
    document.querySelector(DOMstrings.numberHolder).value = "+";
});

var subtractButton = document.getElementById("subtractButton");
    subtractButton.addEventListener("click", function(event){
        console.log("Subtract Me");
        currentOperation = "subtract";
        var currentNumberToLoad = parseFloat(currentNumbers.join('')); // 125
        calculator.load(currentNumberToLoad);
        clearCurrentNumbers();
        document.querySelector(DOMstrings.numberHolder).value = "-";
});

var multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.addEventListener("click", function(event){
        console.log("MULTIPLY");
        currentOperation = "multiply";
        var currentNumberToLoad = parseFloat(currentNumbers.join(''));
        calculator.load(currentNumberToLoad);
        clearCurrentNumbers();
        document.querySelector(DOMstrings.numberHolder).value = "x";

});

var divideButton = document.getElementById("divideButton");
    divideButton.addEventListener("click", function(event){
        console.log("DIVIDE");
        currentOperation = "divide";
        var currentNumberToLoad = parseFloat(currentNumbers.join(''));
        calculator.load(currentNumberToLoad);
        clearCurrentNumbers();
        document.querySelector(DOMstrings.numberHolder).value = "÷";
});


var equalButton = document.getElementById("equalButton");
    equalButton.addEventListener("click", function(event){
    console.log("GET result");
    var currentNumberToLoad = parseFloat(currentNumbers.join("")); //456


    //when user hits EQUAL, check what current operation is
    if(currentOperation === "add"){
        console.log("ADDING");
        console.log("calculator total", calculator.getTotal());
        calculator.add(currentNumberToLoad);
    }

    if(currentOperation === "subtract"){
        console.log("SUBTRACTING");
        console.log("calculator total", calculator.getTotal());
        calculator.subtract(currentNumberToLoad);
    }

    if(currentOperation === "multiply"){
        console.log("MULTIPLYING");
        console.log("calculator total", calculator.getTotal());
        calculator.multiply(currentNumberToLoad);
    }

     if(currentOperation === "divide"){
        console.log("DIVIDE");
        console.log("calculator total", calculator.getTotal());
        calculator.divide(currentNumberToLoad);
    }


    var result = calculator.getTotal();
    console.log("result", result);
    clearCurrentNumbers();


// OUTPUTS RESULT INTO HTML numberDisplay
document.querySelector(DOMstrings.numberHolder).value = result;

});

// CLEARS NUMBER DISPLAY
var clear = document.getElementById("clearButton");
clear.addEventListener("click", (function clearNumbers(){
document.querySelector(DOMstrings.numberHolder).value = null;
currentNumbers = [];

console.log("cleared total", calculator.getTotal());
}));


// DEPOSIT CASH
var memory = [];
var depoCash = document.getElementById("depoCash");
depoCash.addEventListener("click", (function saveTotal(){
  var savedCash = document.querySelector(DOMstrings.numberHolder).value;
  console.log("saved Cash", savedCash);
  memory = memory + savedCash;
  console.log("memory", memory);

}));





// GETS BALANCE
// var balance = document.getElementById("getBalance");
// balance.addEventListener("click", (function balance(){

// }))



var DOMstrings = {
      numberHolder: ".numberHolder",
  };

/*
//adding a new button FOR FUN --- DELETE LATER
var fictionalNumber = document.createElement("div");
fictionalNumber.innerHTML = "0x0f";
fictionalNumber.dataset.number = 15;
//just by saying dataset you can add data to any atribute
fictionalNumber.dataset.mustBeAValidVariableName = "cat";

calculatorFramework.appendChild(fictionalNumber);
*/


