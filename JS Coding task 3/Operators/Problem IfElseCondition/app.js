
function grade(){
    var marks = prompt("Enter your marks ");
    IsPass = parseFloat(marks); 

    if (IsPass == 50 || IsPass >= 50)
    {
        alert("CONGRATULATIONS! You are passed");
    }
    else {
        alert("You are failed.");
    }
}