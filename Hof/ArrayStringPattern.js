var arr = ["shubham", "nitin", "deepak", "ankit", "vishal", "ara"];

/*
// //method -1
// var filtered = x => {
//     if (x[0] === "a" || x[x.length - 1] === "a") {
//         return x;
//     }
// };
// var newarr = arr.filter(filtered);
*/

// method -2
var newarr = arr.filter(x => x[0] === "a" || x[x.length - 1] === "a");



console.log(newarr);