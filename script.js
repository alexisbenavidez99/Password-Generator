// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function is giving us our random integer to pick an item out of the arrays for the numbers, symbols, lowercase and uppercase
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand * max);
}

// This gives us a random position in the list
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Function to generate the password
function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?", "Password length: 8-128 characters"); // Prompt for the password length
  var passwordLength = parseInt(userInput); // parseInt intakes a string and converts it into a number value; userInput is used to convert user input to a number


// isNaN checks to see if input is a number or not; if input is NaN type, it is true
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number");
    return // This stops the function if the input is not a number
  } 
// This is checking if the user input in the correct criteria for length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters");
    return
  }
// This is asking the user if they want numbers in their password; when the user clicks okay the value returns as true, cancel returns false
  var userNumbers = window.confirm("Do you want to include numbers in your password?");
// Uppercase
  var userUppercase = window.confirm("Do you want to include uppercase letters in your password?");
// Lowercase
  var userLowercase = window.confirm("Do you want to include lowercase letters in your password?");
// Symbols
  var userSymbols = window.confirm("Do you want to include symbols in your password?");

// These arrays are the possible characters for each section (numbers, uppercase, lowercase, symbols)
  var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = []
// This is the array for the options the user picked
  var criteriaOptions = []

// This for loop goes through the whole lowercase letters list and converts them all to uppercase using the .toUpperCase method
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
// These if statements are saying if the user picked that option then to put it in the criteriaOptions array so we can use it for later
  if (userNumbers === true) {
    criteriaOptions.push(numbersList); // .push() adds that value to the array called
  }

  if (userUppercase === true) {
    criteriaOptions.push(uppercaseList);
  }

  if (userLowercase === true) {
    criteriaOptions.push(lowercaseList);
  }

  if (userSymbols === true) {
    criteriaOptions.push(symbolList);
  }
// This if statement is setting a default list if the user picks none of the criteria options
  if (criteriaOptions.length === 0 ) {
    criteriaOptions.push(lowercaseList)
  }

// This empty string is our random character selected from our for loop
  var generatedPassword = "";

// This for loop is using the function for the random integer to run through the length of the password to pick random items out of the array
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(criteriaOptions);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar // += means add to itself
  }
// This is returning the password to the text box
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
