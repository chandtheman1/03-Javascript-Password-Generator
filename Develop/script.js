// Assignment Code
var generateBtn = document.querySelector("#generate");



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

//assigns the statement trues/falses to the above functions
var passwordArray = {
  lowerCase: getRandomLower,
  upperCase: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// Write password to the #password input
function writePassword() {

    //Prompts for the user to accept the certain conditions and setting them as variables
    do{
      var length = parseInt(window.prompt("Please enter a number between 8 and 128", ""), 10);
    }while(isNaN(length) || length > 128 || length < 8);

    var lowerCase = confirm("Do you want lowercase?");
    var upperCase = confirm("Do you want uppercase?");
    var number = confirm("Do you want numbers?");
    var symbol = confirm("Do you want special symbols?");

    //if the user does not select yes to any conditions, it refreshes the page advising that one conidition has to be true.
    if (lowerCase == false && upperCase == false && number == false && symbol == false) {

      alert("You must accept yes to one of the conditions");
      reload();
    }

    var password = generatePassword(length, lowerCase, upperCase, number, symbol);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//function to generate password

function generatePassword(length, lowerCase, upperCase, number, symbol) {


  var generatedPassword = "";
  var typesCount = lowerCase + upperCase + number + symbol;

  var typesArr = [{lowerCase}, {upperCase}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  
  
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += passwordArray[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, length);
  
  return finalPassword;
}

