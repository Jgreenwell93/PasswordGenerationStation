// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // function for generating password
  function generatePassword(){
    // requesting password length 8-128 characters
    var length=prompt("Please enter how long you would like your password.","8-128 Characters");
    console.log(length)

    // early cancel parameter and length restrictions
    if(length===null){
      return;
    }else if(length<8){
      alert("Password too short");
      return;
    }else if(length>128){
      alert("Password too long");
      return;
    }

    // requesting if upper case included
    var upperCase=confirm("Do you want to include uppercase letters?");
    console.log(upperCase);
    // requesting if lowercase included
    var lowerCase=confirm("Do you want to include lowercase letters?");
    console.log(lowerCase);
    // requesting if numbers included
    var numbers=confirm("Do you want to include numbers?");
    console.log(numbers);
    // requesting if symbols included
    var symbols=confirm("Do you want to include symbols?");
    console.log(symbols);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
