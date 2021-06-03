
function result(){
    var marks = prompt("Enter your percentage ");
    pass = parseFloat(marks); 

    if(pass > 85) {
        IsPass = 'A';
    }
    else if (pass > 80 && pass <=85) {
        IsPass = 'A-';
    }
    else if (pass > 70 && pass <=80) {
        IsPass = 'B';
    }
    else if (pass > 60 && pass <=70) {
        IsPass = 'C';
    }
    else if (pass > 40 && pass <=60) {
        IsPass = 'D';
    }
    else if (pass <= 40 && pass <=35) {
        IsPass = 'E';
    }

    switch (IsPass) {
      case 'A': 
        alert('You passed with A grade');
        document.querySelector("h1").innerHTML = "BRAVO! You are the Topper!"
        break;
      case 'A-':
        alert('You passed with A- grade');
        document.querySelector("h1").innerHTML = "You got a A- , Good Work!"
        break;
      case 'B':
        alert('You passed with B grade');
        document.querySelector("h1").innerHTML = "You got a B , Try to improve!"
        break;
      case 'C':
        alert('You passed with C grade');
        document.querySelector("h1").innerHTML = "You got a C , Work hard!"
        break;
      case 'D':
        alert('You passed with D grade');
        document.querySelector("h1").innerHTML = "You got a D , Work harder!"
        break;
      case 'E':
        alert('You Failed.');
        document.querySelector("h1").innerHTML = "You are Failed!"
        break;
    }

    
}
