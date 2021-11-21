// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("button clicked");

  // 1. prompt user with criteria
  //    a. legth 8-128
  //    b. lowercase
  //    c. uppercase
  //    d. numbers
  //    e. special character
  // 2. valadate the imput
  // 3. gerate password



  // 4. display the password on the page
  return "generated password will go here."
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
