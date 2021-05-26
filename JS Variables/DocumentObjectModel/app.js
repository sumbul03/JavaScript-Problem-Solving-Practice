function submit()
{
    let inputElement  = document.querySelector("input");
    
    let inputValue = inputElement.value
    let heading = document.querySelector("h1").innerHTML;
    
    document.write (heading + inputValue);
    alert("The message has been sent on the given number");
}


