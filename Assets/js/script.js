// Assignment Code
var generateBtn = document.querySelector("#generate");

// character arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// variables
var confirmLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecial;

function generatePassword () {
  // Step 1. prompt user with criteria
  var confirmLength = window.prompt("How many characters is your password going to have?");
    while(confirmLength <= 8 || confirmLength >= 128) {
      window.alert("Password length must be between 8-128.");
      var confirmLength = window.prompt("How many characters is your password going to have?");
    }

  var confirmLowercase = confirm("Click confirm if you want to include lowercase letters.");
  var confirmUppercase = confirm("Click confirm if you want to include UPPERCASE letters.");
  var confirmNumber = confirm("Click confirm if you want to include numbers.");
  var confirmSpecial = confirm("Click confirm if you want to include special characters.");

  // Step 2. validate the input
  var passwordCharacters = []

  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(lower);
  }
  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(upper);
  }
  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }
  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(special);
  }

  // 3. gerate password
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }


  // 4. display the password on the page
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
