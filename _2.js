//Some important points in js 
let x=5;
x &&=10;

let y = 0;
y ||=10;

let z = null;
z ??= 15;


console.log("Value of z is: " + z)
console.log(y)
console.log(x)
console.log("2"<"12")
console.log(Number("2")<Number("12"))
//will return false cuz in js it compares string by string since 2 comes before 1 it returns false 

/*
node _2.js 
*/