function submit()
{
    let inputElement  = document.querySelector("#name");
    
    let inputValue = inputElement.value
    let heading = document.querySelector("h1>span").innerHTML=inputValue;
    
    // document.write (heading + inputValue);
    alert("The message has been sent on the given number")
}

// let a = prompt("What is ur color?")

