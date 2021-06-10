
var x = document.getElementById("first-div").style.color;

// Printing styling of the div
document.querySelector("#demo > span").innerHTML = x;
document.querySelector("#demo > #border").innerHTML = document.getElementById("first-div").style.border;


// changing the test color
document.getElementById("first-div").style.color = "brown";
