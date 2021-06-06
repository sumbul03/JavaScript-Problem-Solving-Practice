
let games = ["Ludo", "Scrabble","Hockey","Cricket","Football"];

games.push("Polo"); 
console.log("Polo as the last member of array: ", games); 


games.unshift("Polo");  
console.log("‘Polo’ as first member of array: ", games);


games.pop();
console.log("Remove a member of the same array from the end: ", games);


games.shift("Polo");  
console.log("Remove a member of the same array from the beginning: ", games);