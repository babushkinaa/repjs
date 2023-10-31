let num = 266219;
num = num.toString().split("");
result = 1;
for (i = 0; i < num.length; i++) {
	result = num[1] * result;
}
let result3 = result ** 3; // ES6 оператор возведения в степень ** : let p = 2**2 (res =4)

console.log("Переменная num = " + num.join(""));
console.log("Произведение всех чисел = " + result);
console.log("Результат в степени 3 = " + result3);
