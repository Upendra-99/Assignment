var marks = [73, 85, 62];
//given marks of three subjects and assume that each subject has max 100 marks;

var tot_obt = marks.reduce((a, b) => a + b) // tot obtained marks;

var percentage = (tot_obt / 300) * 100;

console.log(percentage)