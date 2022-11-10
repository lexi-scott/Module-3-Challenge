// // Assignment Code
var generateBtn = document.querySelector("#generate");
//two global variables for function output
// var allChar = "";
// var passwordInfo = "";
var numbers = "0123456789";
var lowAlpha = "abcdefghijklmnopqrstuvwxyz";
var upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_+";
// // Write password to the #password input
function generatePassword() {
  var allChar = "";
  var passwordInfo = "";
//variables for prompt/confirm and string variables for character options for passowrd
var passLength = parseInt(prompt("Choose password length between 8 and 128"));
var lowercase = confirm("Would you like lowercase letters?");
var uppercase = confirm("Would you like upper case letters?");
var numeric = confirm("Would you like numbers?");
var characters = confirm("Would you like special characters e.g. ! & *");
//if statements that add the string variable to the allChar global variable depending on user response
if (passLength < 8 || passLength > 128) {
  alert("Choose password length between 8 and 128");
  generatePassword();
}

if (lowercase) {
  allChar += lowAlpha
  passwordInfo += lowAlpha[Math.floor(Math.random() * lowAlpha.length)];
  console.log(allChar);
};

if (uppercase) {
 allChar += upAlpha
 passwordInfo += upAlpha[Math.floor(Math.random() * upAlpha.length)];
  console.log(allChar);
};

if (numeric) {
  allChar += numbers
  passwordInfo += numbers[Math.floor(Math.random() * numbers.length)];
  console.log(allChar);
};

if (characters) {
  allChar += specialChar
  passwordInfo += specialChar[Math.floor(Math.random() * specialChar.length)];
  console.log(allChar);
};

//if they don't choose any confirms 
if (!lowercase && !uppercase && !numeric && !characters) {
  alert("Please select at least one parameter for your password");
  generatePassword();
};

//for loop which randomly pick characters and uses desired length of password
var truePass = passLength - passwordInfo.length
for (var i = 0; i < truePass; i++) {
  var userChoice = Math.floor(Math.random() * allChar.length);
  console.log(userChoice); 
  passwordInfo += allChar[userChoice];
  console.log(passwordInfo);
};
return passwordInfo; 
};

//function to print generated password onto HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

