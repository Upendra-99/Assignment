var array = ['anmol', 'vishal', 'nit', 'upendra', 'ab'];
var newArray = array.filter(x => x % 2 != 0)
var array2 = newArray.map(x.length)
var result = array2.reduce((a, b) => a + b)
console.log(result);