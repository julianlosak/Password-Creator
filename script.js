// Assignment code here
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
const lowercaseLetters = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
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
        for( let i = 0; i < userOptions.passswordlength;i++){
          let possibleCharacter = getRandom(potentialPassword)
          finalPassword.push(possibleCharacter)
        }
        for( let i=0; i < chosenOptions.length;i++){
          finalPassword[i]=chosenOptions[i]
        }
        return finalPassword.join("")
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
