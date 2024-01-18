// Array of uppercase letters
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array of lowercase letters
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",  
];
// Array of special characters
var specialCharacters = [
  "@",
  "#",
  "%",
  "+",
  "/",
  "!",
  "?",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "-",
  "_",
  ".",
  "~",
  "$",
  ",",
  ";",
  ":",
  "^",
  "&",
  "*",
];
// Array of numbers
var numericCharacters = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passwordChosenChar = [];

//
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// Write password to the #password input
function generatePassword() {

  let passwordLength = prompt("Pick a password length between 8 and 128");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
     alert("You must enter a value between 8 and 128.");
  }
  
    var includeLowercase = confirm("Include Lowercase?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    var includeUppercase = confirm("Include Uppercase?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    var includeNumbers = confirm("Include Numbers?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    var includeSymbols = confirm("Include Symbols?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");

  var result = [];
  var possibleCharacters = [];
  var definiteCharacters = [];


if (includeLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  definiteCharacters.push(getRandom(lowercaseCharacters));
}

if (includeUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  definiteCharacters.push(getRandom(uppercaseCharacters));
}

if (includeNumbers) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  definiteCharacters.push(getRandom(numericCharacters));
}

if (includeSymbols) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  definiteCharacters.push(getRandom(specialCharacters));
}


for (var i = 0; i < passwordLength; i++) {
  var randomCharacter = getRandom(possibleCharacters);
  result.push(randomCharacter);
}

for (var i = 0; i < definiteCharacters.length; i++) {
  result[i] = definiteCharacters[i];
}
console.log("possibleCharacters: ", possibleCharacters)
console.log("definiteCharacters: ", definiteCharacters)
console.log("result: ", result)
return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
