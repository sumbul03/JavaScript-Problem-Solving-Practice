// a = 5, b = 10;
var a = 5, b = 10;

function logicalOperators() {
    
    console.log("Logical NOT Operator");
    
    console.log(!null); // true
    console.log(!a); //false
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!b); // false


    console.log("Logical OR Operator");
    let result = a || b;
    if (result == 5){
        console.log("a || b is true where value of a and b are "+a + "\tand\t" + b)
    }
    else {
        console.log("a || b is false where value of a and b are "+a + "\tand\t" + b)
    }

    console.log("Logical AND Operator");

  
    result = a && b;
    if (result == 5){
        console.log("a && b is true where value of a and b are "+a + "\tand\t" + b)
    }
    else {
        console.log("a && b is false where value of a and b are "+a + "\tand\t" + b)
    }

}

function assignmentOperators() {
    
  
            var c = "Test";
            
            document.write("Arithmetic Operators");
            document.write("<br />"); 

            document.write("a + b = ");
            let result = a + b;
            document.write(result);
            document.write("<br />");
         
            document.write("a - b = ");
            result = a - b;
            document.write(result);
            document.write("<br />");
         
            document.write("a / b = ");
            result = a / b;
            document.write(result);
            document.write("<br />");
         
            document.write("a % b = ");
            result = a % b;
            document.write(result);
            document.write("<br />");
         
            document.write("a + b + c = ");
            result = a + b + c;
            document.write(result);
            document.write("<br />");
         
            a = ++a;
            document.write("++a = ");
            result = ++a;
            document.write(result);
            document.write("<br />");
         
            b = --b;
            document.write("--b = ");
            result = --b;
            document.write(result);
            document.write("<br /> <br /> <br />");

            // Comparison Operators

            document.write("Comparison Operators");
            document.write("<br />");
            document.write("(a == b) => ");
            result = (a == b);
            document.write(result);
            document.write("<br />");
         
            document.write("(a < b) => ");
            result = (a < b);
            document.write(result);
            document.write("<br />");
         
            document.write("(a > b) => ");
            result = (a > b);
            document.write(result);
            document.write("<br />");
         
            document.write("(a != b) => ");
            result = (a != b);
            document.write(result);
            document.write("<br />");
         
            document.write("(a >= b) => ");
            result = (a >= b);
            document.write(result);
            document.write("<br />");
         
            document.write("(a <= b) => ");
            result = (a <= b);
            document.write(result);
            document.write("<br />");

}