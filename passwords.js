//variables
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var sym = "!@#$%^&*()_+=[]{}|;':./,<>?";
var newPassword = [];

//capture slider value
var passSliderLength = document.getElementById("length");
passSliderLength.addEventListener("mouseup", function () {
  console.log(this.value);
});

//capture requirements for submitting
var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("mouseup", function () {
  var passLength = document.getElementById("length").value;
  var passNum = document.getElementById("numSwitch").checked;
  var passCaps = document.getElementById("capitalSwitch").checked;
  var passLower = document.getElementById("lowerSwitch").checked;
  var passSym = document.getElementById("symSwitch").checked;

  // using if statements, if checkbox is true,
  // add that string to passwordPossiblities
  var passwordPossibilities = "";

  if (passNum === true) {
    passwordPossibilities += numbers;
    console.log(passwordPossibilities);
  }
  if (passCaps === true) {
    passwordPossibilities += upperCaseLetters;
    console.log(passwordPossibilities);
  }
  if (passLower === true) {
    passwordPossibilities += lowerCaseLetters;
    console.log(passwordPossibilities);
  }
  if (passSym === true) {
    passwordPossibilities += sym;
    console.log(passwordPossibilities);
  }

  // After you generate all the possiblities
  // loop "passLength" times and pick and random
  // from password possibilies and add it to result

  var randomIndex;
  var result = [];

  for (var i = 0; i < passLength; i++) {
    randomIndex = Math.floor(Math.random() * passwordPossibilities.length);
    result.push(passwordPossibilities[randomIndex]);
  }

  // return result
  alert(result);
});
