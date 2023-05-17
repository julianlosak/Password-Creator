// Assignment code here
const symbols = ["!", "@", "#"]
const numbers = ["1", "2", "3"]
const uppercaseLetters = ["A", "B", "C"]
const lowercaseLetters = ["a", "b", "d"]
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
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
  let userOptions = {
    passswordlength: passswordlength,
    wantSymbols:  wantSymbols,
    wantUppercaseLetters: wantUppercaseLetters,
    wantLowercaseLetters: wantLowercaseLetters,
    wantNumbers: wantNumbers,
  }
  console.log (userOptions)
  let finalPassword = []
  let potentialPassword = []
  let chosenOptions = []
  
  if (userOptions.wantSymbols){
  potentialPassword = potentialPassword.concat(symbols)
  chosenOptions.push(getRandom(symbols))
  }
  if (userOptions.wantUppercaseLetters){
    potentialPassword = potentialPassword.concat(uppercaseLetters)
    chosenOptions.push(getRandom(uppercaseLetters))
    }
  if (userOptions.wantLowercaseLetters){
      potentialPassword = potentialPassword.concat(lowercaseLetters)
      chosenOptions.push(getRandom(lowercaseLetters))
      }
  if (userOptions.wantNumbers){
        potentialPassword = potentialPassword.concat(numbers)
        chosenOptions.push(getRandom(numbers))
        }
        console.log(potentialPassword, chosenOptions)
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
