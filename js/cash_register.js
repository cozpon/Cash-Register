console.log("sanity check");


var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {
        // 1. Get the field input data
        // 2. Add item to the budget controller
        // 3. Add the new item to UI
        // 4. Calculate the budget
        // 5. Display the budget on UI
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
      
    document.addEventListener("keypress", function(event) {
        // if ENTER is pressed, return something (event.which is for older browswers)
        if(event.keyCode === 13 || event.which === 13){
          ctrlAddItem();
        }

    });

})(budgetController, UIController);