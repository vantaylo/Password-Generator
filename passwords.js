//variables
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var sym = "!@#$%^&*()_+=[]{}|;':./,<>?";

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
});
