let games = ["Ludo", "Scrabble","Hockey","Cricket","Football"];


// For loop

for (var i=0;i<games.length;i++){
    if ("Cricket" == games[i]){
        console.log("Cricket Exits!");
        console.log("The Index of Cricket is : ",games.indexOf("Cricket"));
    }
    else {
        console.log("Does not Exist");
    }

    
}
