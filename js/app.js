console.log("hello");
//alert("hello");

let money = 10000; // доход за месяц
let income = 2150; // дополнительный доход
let addExpenses = "инетернет, телефон, квартплата, машина"; // расходы через запятую
let deposit = true; // булево значение
let mission = 1000000; // что хотим накопить
let period = 11; // период накопления 1-12 месяцев
let budgetDay = 500; // дневной бюджет

console.log(money, income, deposit + " -типы переменных");
console.log(
	"Длинна строки { addExpenses }" + " " + addExpenses.length + " символов"
);
console.log("Период равен: " + period + " месяцев");
console.log("Цель заработать: " + mission + " рублей");
console.log(addExpenses.split(",").reverse().join(" "));
console.log(addExpenses.toUpperCase());
console.log("Дневной бюджет: " + budgetDay + " рублей");
