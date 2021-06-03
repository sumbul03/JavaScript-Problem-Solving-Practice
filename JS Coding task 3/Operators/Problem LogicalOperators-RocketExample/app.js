
function launch(){
    var IsSnow = prompt("Is it Snowing?"), IsRain = prompt("Is it Raining?"), IsSpeed = prompt("what is the speed of wind in km/hr? Enter the number only");
    speed = parseFloat(IsSpeed); 

    if ((IsSnow == 'no' || IsSnow == 'No' ||IsSnow == 'false' || IsSnow == 'False') && (IsRain == 'no' || IsRain == 'No' || IsRain == 'false' || IsRain == 'False') && (speed < 20 ))
    {
        alert("Rocket will be launched!");
    }
    else {
        alert("Atmosphere isn't suitable so the Rocket can not be launched.");
    }
}