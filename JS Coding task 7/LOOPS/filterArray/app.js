let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];
console.log("Original array of ages: " ,ages);
console.log("Array of ages more than 40 : ",ages.filter((age) => age > 40)); //Output [ 56, 80, 90, 100, 101, 102 ]