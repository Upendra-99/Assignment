var product = [2, 3, 6, 7, 9, 15, 16, 17, 21];
var y = product.filter(x => x % 3 === 0);
var array = y.map(x => x ** 3);
var r = array.reduce((prv, curr) => prv + curr);
console.log(r);