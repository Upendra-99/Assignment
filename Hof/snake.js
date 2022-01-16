var array = ['amit', 'anita', 'nitin', 'up', 'abc']

var newarr = array.reduce((prev, curr) => prev + "_" + curr);

console.log(newarr);