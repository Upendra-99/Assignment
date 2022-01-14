var arr = ["shubham", "nitin", "deepak", "ankit", "vishal", "ara"];

var filtered = (x) => {
  if (x[0] === "a" || x[x.length - 1] === "a") {
    return x;
  }
};
var newarr = arr.filter(filtered);
console.log(newarr);
