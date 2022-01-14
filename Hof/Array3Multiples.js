var product = [2, 3, 5, 7, 9];
var newarr = product.filter((x) => x % 3 === 0);
var cubes = newarr.map((x) => x ** 3);
var result = cubes.reduce((a, b) => a + b);
console.log(result);
