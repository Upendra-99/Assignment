var arr = ["shubham", "nitin", "deepak", "ankit", "vishal"];
var newarr = arr.reduce((prev, curr) => prev + "_" + curr);
console.log(newarr);
