let num = 266219;
num = num.toString().split("");
let result = 1;
for (let i = 0; i < num.length; i++) {
	result = num[i] * result;
}

let result3 = result ** 3; // ES6 оператор возведения в степень ** : let p = 2**2 (res =4)

console.log("Переменная num = " + num.join("*"));
console.log("Произведение всех чисел = " + result);
console.log("Результат в степени 3 = " + result3);
