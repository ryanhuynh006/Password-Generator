// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to generate the password
function generatePassword() {
    var length = prompt("Enter password length (between 8 and 128 characters):");
    length = parseInt(length);
    //Checks if the length of the password is within requirements
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Password must be between 8 and 128 characters. Please try again.");
        return "";
    }
    //prompt user to include character types.
    var lowercase = confirm("Would you like to include lowercase characters?");
    var uppercase = confirm("Would you like to include uppercase characters?");
    var numbers = confirm("Would you like to include numbers?");
    var specialCharacters = confirm("Would you like to include special characters?");
    //Shows Error if user does not select as least one character type
    if(!lowercase && !uppercase && !numbers && !specialCharacters) {
        alert("Please select at least one character type.");
        return "";
    }
    //Declaring available characters for the password generator
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "1234567890";
    //Special characters that are available
    var specialChars = "!@#$%^&*()_+<>{}[]?|\/";

    var selectCharacters = '';
    if (lowercase) selectCharacters += lowercaseChars;
    if (uppercase) selectCharacters += uppercaseChars;
    if (numbers) selectCharacters += numberChars;
    if (specialCharacters) selectCharacters += specialChars;

    //for function to loop through declared password length and generate using random
    var password ='';
    for (var i=0; i<length; i++) {
        var random = Math.floor(Math.random() * selectCharacters.length);
        password += selectCharacters.charAt(random);
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);