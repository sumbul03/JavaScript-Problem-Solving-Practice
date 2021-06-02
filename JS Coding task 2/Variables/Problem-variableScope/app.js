

let my_num = 3; 
let my_new_num = toString(my_num);

let myString = "2.3";
let ingr = parseInt(myString) ;
let flt = parseFloat(myString);

function varScopeCheck(){
    
    console.log("Value of my_num after using toString() is\t" + ingr + "\n Type of my_num after usign toString() is\t" + typeof(my_new_num));
    console.log("Value of Integer is\t" + ingr + "\n Type of Integer is\t" + typeof(ingr));
    console.log("Value of Float is\t" + flt + "\n Type of Float is\t" + typeof(flt));
}

varScopeCheck(); // Prints the values 2 and 2.3 with type  'number' for both