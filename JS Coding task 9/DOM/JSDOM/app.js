
// Referring to the 1st div conatining the clas 'div-class'
let d = document.getElementsByClassName("div-class")[0].className = "changed-class";
let r = document.getElementById("first-div").className;
console.log(r);

document.getElementById("first-div").style.color = "red";
document.getElementById("first-div").style.border = "5px solid blue";