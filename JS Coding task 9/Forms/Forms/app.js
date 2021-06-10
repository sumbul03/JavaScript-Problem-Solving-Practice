


document.getElementById("login").addEventListener("click", submitFunction)

function submitFunction() {

  let emailValue = document.querySelector("#email").value;
  let passwordValue = document.querySelector("#pwd").value;

  console.log(emailValue,passwordValue);
  console.log(passwordValue.length);

  if ((emailValue == "") && (passwordValue == "")) {
        alert("Please fill the credentials correctly");
        
        
  } 
  else if(passwordValue.length <= 8){
 
    alert("Password must be of 8 digits"); }

    // else if (!emailValue(mail)) {
    //   alert("Not a valid email");
    // } 
    // else{
    //   alert("Login Successfully");
    // }
}
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passwordValue = document.querySelector("#pwd").value;

if(inputText.value.match(mailformat) && (passwordValue.length >= 8))
{
  alert("Login Successfully");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address or Password is less than 8 digits");
document.form1.text1.focus();
return false;
}
}