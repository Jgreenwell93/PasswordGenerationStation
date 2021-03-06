// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass=[]
var selected=[];
var caps=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lows=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums=[0,1,2,3,4,5,6,7,8,9,];
var syms=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";",",",",","?","/", ">","<"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // function for generating password
  function generatePassword(){
    // requesting password length 8-128 characters
    var length=prompt("Please enter how long you would like your password.","8-128 Characters");
    console.log(length);
    console.log(typeof length);


    // early cancel parameter and length restrictions
    if(length===null){
      return;
    }else if(length<8){
      alert("Password too short");
      return;
    }else if(length>128){
      alert("Password too long");
      return;
    };

    // converts length variable from a string to a int
    length=parseInt(length);
    console.log(length);
    console.log(typeof length);

    // requesting if upper case included
    var upperCase=confirm("Include uppercase letters?");
    console.log(upperCase);
    // if yes concat uppercase array
    if(upperCase){
      selected= selected.concat(caps);
      console.log(selected);
    };

    // requesting if lowercase included
    var lowerCase=confirm("Include lowercase letters?");
    console.log(lowerCase);
    // if yes concat lowercase array
    if(lowerCase){
      selected=selected.concat(lows);
      console.log(selected);
    };

    // requesting if numbers included
    var numbers=confirm("Include numbers?");
    console.log(numbers);
    // if yes concat numbers array
    if(numbers){
      selected=selected.concat(nums);
      console.log(selected);
    
    };

    // requesting if symbols included
    var symbols=confirm("Include symbols?");
    console.log(symbols);
    // if yes concat symbols array
    if(symbols){
      selected=selected.concat(syms);
      console.log(selected);
    };

    if(!upperCase,!lowerCase,!numbers,!symbols){
      alert("No character types selected. More input required.");
      return;
    }

    // select random values from array
    for (i=0; i<length; i++) {
      var passgen= selected[Math.floor(Math.random() * selected.length)];
      pass=pass.concat(passgen);

      console.log(pass);
  };

  // removes the commas from the displayed value of pass
  pass=pass.join("");
  
  // returns the generated password value to the function
  return pass;
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
