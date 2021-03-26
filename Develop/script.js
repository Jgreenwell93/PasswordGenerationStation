// Assignment Code
var generateBtn = document.querySelector("#generate");
var selected=[]
var caps=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lows=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums=[0,1,2,3,4,5,6,7,8,9,];
var syms=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\",":",";",","'","<",",",">",".","?","/"];

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
    var upperCase=confirm("Include uppercase letters?");
    console.log(upperCase);
    // requesting if lowercase included
    var lowerCase=confirm("Include lowercase letters?");
    console.log(lowerCase);
    // requesting if numbers included
    var numbers=confirm("Include numbers?");
    console.log(numbers);
    // requesting if symbols included
    var symbols=confirm("Include symbols?");
    console.log(symbols);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
