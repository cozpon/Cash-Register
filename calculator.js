  console.log("sanity check");

 /**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = function(){

   var memory = 0
   var total = 0

   var calculator = {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,

};


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load(x){
    validate(x);
    total = x;
    return total;
   };

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal(){
    return total;
   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
    validate(x);
    total += x;
    return total;
   };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(x){
    validate(x);
    total -= x;
    return total;
   };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x){
    validate(x);
    total *= x;
    return total;
   };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x){
    validate(x);
    total /= x;
    return total;
   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recallMemory(){
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function saveMemory(){
    memory = total;
    return memory;
   }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory(){
    memory = 0;
    return memory;
   }

  /**
   * Validation
   */
   function validate(x){ 
    if (typeof x !== "number"){
    throw new Error("Input a Number");
    } 
}

   return calculator;
 };
