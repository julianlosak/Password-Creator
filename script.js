// Assignment code here
const symbols = ["!", "@", "#"]
const numbers = ["1", "2", "3"]
const uppercaseLetters = ["A", "B", "C"]
const lowercaseLetters = ["a", "b", "d"]

function generatePassword() {
  let passswordlength = prompt ("How long would you like the password")
  if (Number.isNaN(passswordlength)||passswordlength < 8||passswordlength > 128) {
    alert("Input has to be a number value greater than 8 less than 128")
    return null
  }
  var wantSymbols = confirm("Do you want to utilize symbols")
  var wantNumbers = confirm("Do you want to utilize numbers")
  var wantUppercaseLetters = confirm("Do you want to utilize uppercase letters")
  var wantLowercaseLetters = confirm("Do you want to utilize lowercase letters")
  if (!wantSymbols && !wantNumbers && !wantLowercaseLetters && !wantUppercaseLetters){
    alert("Must choose at least one option")
    return null
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
