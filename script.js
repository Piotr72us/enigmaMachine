
// Selector for the "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Function to write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Variables that store characters for the password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var totalCharacters = [];

var confirmUppercase = " ";
var confirmLowercase = " ";
var confirmNumbers = " ";
var confirmSpecial = " ";
var characterCount = " ";

// Function that generates the password
function generatePassword() {
    confirmCriteria();
    createFinalArray();
    var password = "";
    for (var i = 0; i < characterCount; i++) {
        var character = totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
        console.log(character);
        password += character;
    };
    totalCharacters = [];
    return password;
}

// Function to confirm password criteria
function confirmCriteria () {
    confirmUppercase = confirm("Would you like to use UPPERCASE characters in your new password? Select OK if yes. Cancel if not.");
    confirmLowercase = confirm("Would you like to use lowercase characters in your new password? Select OK if yes. Cancel if not.");
    confirmNumbers = confirm("Would you like to use numbers like 2 or 7 in your new password? Select OK if yes. Cancel if not.");
    confirmSpecial = confirm("Would you like to use special characters such as ! or @ in your new password? Select OK if yes. Cancel if not.");

    if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecial === false) {
        alert("You must include at least one of uppercase, lowercase, numerical or special characters.");
        confirmCriteria ();
    }
    else {
        confirmCount();
    }
}

// Function to confirm character count between 8 and 128
function confirmCount () {
    characterCount = prompt("How many characters would you like to have in your password? Choose a number between 8 and 128.");

    if (characterCount < 8 || characterCount > 128) {
        alert("Choose a number between 8 and 128.");
        confirmCount();
    }
}

// Function to create an array with the password characters
function createFinalArray() {
    if (confirmUppercase) {
        Array.prototype.push.apply(totalCharacters, upperCasedCharacters);
    };
    if (confirmLowercase) {
        Array.prototype.push.apply(totalCharacters, lowerCasedCharacters);
    };
    if (confirmNumbers) {
        Array.prototype.push.apply(totalCharacters, numericCharacters);
    };
    if (confirmSpecial) {
        Array.prototype.push.apply(totalCharacters, specialCharacters);
    };
    }

// Event listener to call the password function on click
generateBtn.addEventListener("click", writePassword);