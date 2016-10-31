// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.
var PRICEPERPIZZA = 10;
var TAXRATE = "20%";
var TAXAPPLY = 0.8;
var DISCOUNTCODE = "Z";
var DISCOUNTRATE = "10%";
var DISCOUNTAPPLY = 0.9;

var numPizzas;
var subTotal;
var total;
var hasDiscount = false; // Hint for prompts
var userCode;


// By convention, these variables represent CONSTANTS (unchanging values)

// Set the flat rate per pizza

var customerName = prompt('What is your name?');
console.log(customerName);


/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */

numPizzas = prompt("How many pizzas do you want?");
numPizzas = Number(numPizzas);
console.log(numPizzas);


function checkDiscountCode(x) {
    if (DISCOUNTCODE === x) {
        alert("great, you have 10% discount. Press OK to finish your order and print your receipt");
        hasDiscount = true;
    } else {
        alert("the code is incorrect");
        hasDiscount = false;
    }
}

hasDiscount = prompt('Do you have a discount code? Please, type yes or no');
if (hasDiscount === 'yes') {
    hasDiscount = true;
    userCode = prompt("write your code");
    checkDiscountCode(userCode);
} else {
alert("Press OK to finish your order and print your receipt");
    hasDiscount = false;
}
console.log(hasDiscount);







function getSubTotal (){
  if (hasDiscount){
    subTotal = (numPizzas * PRICEPERPIZZA * DISCOUNTAPPLY);
    return subTotal;
  } else {
    subTotal = (numPizzas * PRICEPERPIZZA);
    return subTotal;
  }
}
console.log("your subtotal is " + getSubTotal(numPizzas));

function getTotal (){
  total = subTotal * TAXAPPLY;
  return total;
}
console.log("your total is " + getTotal(subTotal));


function printReciept (){
  if (hasDiscount) {
    console.log(
      "RECIEPT\nCLIENT: " + customerName + "\nNUMBER OF PIZZAS: " + numPizzas + "\nPIZZAS PRIZE: USD" + PRICEPERPIZZA + "\nDISCOUNT: " + DISCOUNTRATE + "\nSUBTOTAL: " + subTotal + "\nTAX RATE: " + TAXRATE + "\nTOTAL: " + total);
  } else {
    console.log(
      "RECIEPT\nCLIENT: " + customerName + "\nNUMBER OF PIZZAS: " + numPizzas + "\nPIZZAS PRIZE: USD" + PRICEPERPIZZA + "\nDISCOUNT: 0" + "\nSUBTOTAL: " + subTotal + "\nTAX RATE: " + TAXRATE + "\nTOTAL: " + total);}
}

printReciept (customerName, numPizzas, subTotal, total);







/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.

// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.

// Function that calculates the total based on subtotal and tax rate. It should return a number;

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.


/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */





// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
    document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);

// Can you transform your code so that instead of to the console, it writes to the webpage?
