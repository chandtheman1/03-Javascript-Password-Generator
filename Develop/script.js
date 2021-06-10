// Assignment Code
var generateBtn = document.querySelector("#generate");

do{
  var lengthEl = parseInt(window.prompt("Please enter a number from 8 to 128", ""), 10);
}while(isNaN(lengthEl) || lengthEl > 128 || lengthEl < 8);

var lowerCaseEl = confirm("Do you want lowercase?");
var upperCaseEl = confirm("Do you want uppercase?");
var numberEl = confirm("Do you want numbers?");
var symbolEl = confirm("Do you want special symbols?");

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


// Write password to the #password input
function writePassword() {
  var length = lengthEl.value;
  var hasLower = lowerCaseEl.checked;
  var hasUpper = upperCaseEl.checked;
  var hasNumber = numberEl.checked;
  var hasSymbol = symbolEl.checked;

  var password = generatePassword(length, lower, upper, number, symbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generates randowm lower case letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generates random upper case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// generates random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// generates random symbol
function getRandomSymbol () {
  var symbols = "!@#$%^&*()[]{}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(length, lower, upper, number, symbol) {


  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );
  
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }


}

