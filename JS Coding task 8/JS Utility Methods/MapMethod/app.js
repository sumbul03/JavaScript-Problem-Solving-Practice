let agesArray = [12,45,56,4];
agesArray.map(arrPrint);

function arrPrint(i,ary){
    console.log("The array members are: ", ary);
    console.log("The array member's indices are: ", i);

}

/* use map method to make a new array from the same array by multiplying each age value by 10.*/

let newarray = agesArray.map(multiply);

function multiply(ary) {
  console.log(ary * 10);
}

/* B -- Suppose you’re given an array of objects: */
let usersData = [

    {
        name: 'Saeed', lastName: 'Ahmad', school: 'UoT', profession: 'engineer',
    },
    
    {
     name: 'Ali', lastName: 'Khan', school: 'TUM',  profession: 'researcher',
    }
    
    ];

// Use map method to print each value in a table. 

console.log(usersData.map(objectPrint));
function objectPrint(udata){
    return udata.name + " " + udata.lastName + " "+ udata.school + " " + udata.profession
}