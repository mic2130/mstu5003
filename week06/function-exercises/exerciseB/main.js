// Magic Number Guessing Game

// Math.random() generates a number between 0 and 0.999999
var magicNum = Math.ceil(Math.random() * 100);
console.log(magicNum);
// What does this line of code actually do part by part?
// ANSWER: var MagicNum set a variable / It must be the opposite from Math.floor so it must aproximate the given number to it next integer / Math.random returns a number beteween 0 and 1 (not including 1 but including 0)/ *100 multiples the random number by 100 to obtain numbers beteween 0 and 100 /
// What is the range of possible integers here?
// ANSWER: 1 to 100


// Create a function that prompts the user to guess a number within the range of possible numbers and compares the user number to the magic number. Return String, 'low' if user number is low. 'high' if user number is high, 'exact' if user number is correct.

// Create a function that takes low, high, or exact as a String argument, and uses this value to give a feedback message to the user.

// Continue this game until the correct number is chosen.

// You an use the console or alert to give feedback.



/* BONUS */

// Set a limit to how many times a user can guess.
// Give feedback as to how many guesses are left each time.
// Give feedback that the user loses if they reach beyond the limit.

// Ask if the user wants to play again.
// Keep a running score between games.
// Assign points for wins.
// Deduct poitns for losses.
// Give bigger bonus points per guesses leftover at win state. E.g. If they have 2 guesses left and win, bonus. If they have 5 guesses left and win, more bonus.

// Keep a record of numbers the user has guessed.
// Give feedback to the users as to which numbers he/she has already guessed.
