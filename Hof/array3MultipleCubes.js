var array = [1, 4, 6, 12, 15, 11];
var array2 = array.filter(x => x % 3 === 0)
var array3 = array2.map(x ** 3)
console.log(array3);