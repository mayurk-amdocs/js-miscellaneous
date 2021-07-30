const salaries = {
	"a": 20000,
	"b": 30000,
	"c": 40000
};

const doubleSalary = Object.fromEntries(Object.entries(salaries).map(el => [el[0], el[1] * 2]));

console.log(doubleSalary);
