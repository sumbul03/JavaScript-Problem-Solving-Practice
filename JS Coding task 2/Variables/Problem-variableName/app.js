

// DECLARING VARIABLE USING LET
/*
function variableName() {
    let varname = 3;
    console.log(varname);
}

function varNameCheck(){
    console.log(varname);
}

varNameCheck();
*/

// DECLARING VARIABLE USING VAR
/*
function variableName() {
    var varname = 3;
    console.log(varname);
}

function varNameCheck(){
    varname = 6;
    console.log(varname);
}

varNameCheck(); //DID NOT throw Error

*/

// DECLARING GLOBAL SCOPED VARIABLE

let varname = 3; 

function varNameCheck(){
    varname = 8;
    console.log(varname);
}

varNameCheck(); // varname has been updated with value 8. NO ERROR