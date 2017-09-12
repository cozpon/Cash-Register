// Connects to calculator.js
var calculator = calculatorModule();
var currentNumbers = []; // every time we initiate an operation (add or subtract), clear this!
var currentOperation = null;
var keys = document.querySelectorAll(".keys");
var calculatorFramework = document.querySelector(".calculatorFramework");
var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");
var divideButton = document.getElementById("divideButton");
var equalButton = document.getElementById("equalButton");



 // resets current internal state
function clearCurrentNumbers(){
    currentNumbers = [];
}

var DOMstrings = {
      numberHolder: ".numberHolder",
};




// hitting all the KEY ID's, querySelectorALL makes it a DOM collection
function addKeyClickHandlers(key){
  key.addEventListener("click", function(event){
  var stringValue = event.currentTarget.dataset.number;
  currentNumbers.push(stringValue);
  // Shows clicked number in UI
  document.querySelector(DOMstrings.numberHolder).value = currentNumbers.join('');

  });
}

keys.forEach(addKeyClickHandlers);


document.addEventListener("keypress", function(event) {
// if ENTER is pressed, return something (event.which is for older browswers)
if(event.keyCode === 49 || event.which === 49){
  console.log("1");
  }
});




/////////////////////////// CALCULATOR OPERATIONS
addButton.addEventListener("click", function(event){
        //Changes currentOperation from null to "add" in equalsButton loop
  currentOperation = "add";
        // save the current set of numbers inputted by user
  var currentNumberToLoad = parseFloat(currentNumbers.join('')); // ["1", "2", "5"] --> "125"
        // loads current number into calculator
  calculator.load(currentNumberToLoad);
  clearCurrentNumbers();
  document.querySelector(DOMstrings.numberHolder).value = "+";
});

subtractButton.addEventListener("click", function(event){
  currentOperation = "subtract";
  var currentNumberToLoad = parseFloat(currentNumbers.join('')); // 125
  calculator.load(currentNumberToLoad);
  clearCurrentNumbers();
  document.querySelector(DOMstrings.numberHolder).value = "-";
});

multiplyButton.addEventListener("click", function(event){
  currentOperation = "multiply";
  var currentNumberToLoad = parseFloat(currentNumbers.join(''));
  calculator.load(currentNumberToLoad);
  clearCurrentNumbers();
  document.querySelector(DOMstrings.numberHolder).value = "x";

});


divideButton.addEventListener("click", function(event){
  currentOperation = "divide";
  var currentNumberToLoad = parseFloat(currentNumbers.join(''));
  calculator.load(currentNumberToLoad);
  clearCurrentNumbers();
  document.querySelector(DOMstrings.numberHolder).value = "÷";
});



equalButton.addEventListener("click", function(event){
  var currentNumberToLoad = parseFloat(currentNumbers.join("")); //456


  //when user hits EQUAL, check what current operation is
  if(currentOperation === "add"){
        calculator.add(currentNumberToLoad);
    }

  if(currentOperation === "subtract"){
        calculator.subtract(currentNumberToLoad);
    }

  if(currentOperation === "multiply"){
        calculator.multiply(currentNumberToLoad);
    }

  if(currentOperation === "divide"){
        calculator.divide(currentNumberToLoad);
    }


var result = calculator.getTotal();
    clearCurrentNumbers();
    // OUTPUTS RESULT INTO HTML numberDisplay
    document.querySelector(DOMstrings.numberHolder).value = result;

});

// CLEARS NUMBER DISPLAY
var clear = document.getElementById("clearButton");
    clear.addEventListener("click", function clearNumbers(){
          document.querySelector(DOMstrings.numberHolder).value = null;
          clearCurrentNumbers();
          calculator.clearMemory();

});


// DEPOSIT CASH



var depoCash = document.getElementById("depoCash");
    depoCash.addEventListener("click", (function saveTotal(){
          var moneyDeposit = parseFloat(document.querySelector(DOMstrings.numberHolder).value);
          var currentBalance = parseFloat(calculator.recallMemory());
          calculator.saveMemory(moneyDeposit + currentBalance);
          document.querySelector(DOMstrings.numberHolder).value = "Money Deposited";
}));


// WITHDRAW MONEY
var withdrawCash = document.getElementById("withCash");
withdrawCash.addEventListener("click", function withdraw(){
  var moneyWithdraw = parseFloat(document.querySelector(DOMstrings.numberHolder).value);
  var currentBalance = parseFloat(calculator.recallMemory());
  calculator.saveMemory(currentBalance - moneyWithdraw);
  document.querySelector(DOMstrings.numberHolder).value = "Money Withdrawn";

});




// GETS BALANCE
var balance = document.getElementById("getBalance");
    balance.addEventListener("click", function balance(){
          var returnBalance = parseFloat(calculator.recallMemory());
          document.querySelector(DOMstrings.numberHolder).value = returnBalance;
});





