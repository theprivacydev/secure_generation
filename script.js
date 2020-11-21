// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create array of characters to choose from
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specChar = ["!", "\"", "#", "$", "%", "&", "\'", "\(", "\)", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword () {

    var allPossibleChar = [];
    var generatedPassword = "";
  

    // User chooses valid input password length
    var passLength = parseInt(prompt("How long would you like your password to be?"));

    if (passLength < 8 || passLength > 128) {
      alert('Invalid Input: Your password must be more than 8 charaters and less than 128 characters.') + prompt("How long would you like your password to be?");
    } 


    // Confirms if user wants to include numbers
    var num = confirm("Do you want to include numbers?");
    if (num === true) {
      allPossibleChar = allPossibleChar.concat(numbers);
    }

    // Confirms if user wants to include uppercase letters
    var charTypeUpper = confirm("Would you like to include upper case letters?");
    if (charTypeUpper === true) {
      allPossibleChar = allPossibleChar.concat(charUpper);
    }

    //  Confirms if user wants to include lower case letters
    var charTypeLower = confirm("Would you like to include lower case characters?");
    if (charTypeLower === true) {
      allPossibleChar = allPossibleChar.concat(charLower);
    }

    //  Confirms if user wants to include special characters
    var charTypeSpec = confirm("Do you want to include special characters?");
    if (charTypeSpec === true) {
      allPossibleChar = allPossibleChar.concat(specChar);
    }
  
    // Creates a random number that pulls characters from the arrays requested until the password length (passLength) that was chosen is reached
    for (i = 0; i < passLength; i++) {
      var randNum = Math.floor(Math.random() * allPossibleChar.length);
     generatedPassword = generatedPassword + (allPossibleChar[randNum]);
    }
   
    return generatedPassword;

  }


  