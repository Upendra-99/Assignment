var arr = ["shubham", "nitin", "deepak", "ankit", "vishal"];
var newarr = arr.filter((x) => x.length % 2 !== 0);

var value = newarr.map((x) => x.length);

var result = value.reduce((a, b) => a + b);
console.log(result);
