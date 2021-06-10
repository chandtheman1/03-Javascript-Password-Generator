// Assignment Code
var generateBtn = document.querySelector("#generate");

do{
  var length = parseInt(window.prompt("Please enter a number from 8 to 128", ""), 10);
}while(isNaN(length) || length > 128 || length < 8);

var lowerCase = confirm("Do you want lowercase?");
var upperCase = confirm("Do you want uppercase?");
var number = confirm("Do you want numbers?");
var symbol = confirm("Do you want special symbols?");

var randomFunc = {
  lowerCase: getRandomLower,
  upperCase: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// var length = lengthEl.value;
// var hasLower = lowerCaseEl.checked;
// var hasUpper = upperCaseEl.checked;
// var hasNumber = numberEl.checked;
// var hasSymbol = symbolEl.checked;

// Write password to the #password input
function writePassword() {

  var password = generatePassword(length, lowerCase, upperCase, number, symbol);
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



function generatePassword(length, lowerCase, upperCase, number, symbol) {


  var generatedPassword = "";
  var typesCount = lowerCase + upperCase + number + symbol;

  var typesArr = [{lowerCase}, {upperCase}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return "";
  }
  
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, length);
  
  return finalPassword;
}

