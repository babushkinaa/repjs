console.log("hello");
//alert("hello");

let money = prompt("Укажите Ваш бюджет за месяц", 10000); // доход за месяц
let income = prompt("Ваш дополнительный доход", 2150); // дополнительный доход
let addExpenses = prompt(
	"Ваши расходы через запятую",
	"инетернет, телефон, квартплата, машина"
); // расходы через запятую
let deposit = confirm("Есть ли у Вас депозит?", true); // булево значение
let mission = prompt("Сколько Вы хотите накопить?", 1000000); // что хотим накопить
let period = prompt("Сколько будем копить?", 11); // период накопления 1-12 месяцев
let budgetDay = prompt("Сколько в день ты получаешь?", 500); // дневной бюджет

console.log(money, income, deposit + " -типы переменных");
console.log(
	"Длинна строки { addExpenses }" + " " + addExpenses.length + " символов"
);
console.log("Период равен: " + period + " месяцев");
console.log("Цель заработать: " + mission + " рублей");
console.log(addExpenses.split(",").reverse().join(" * "));
console.log(addExpenses.toUpperCase());
console.log("Дневной бюджет: " + budgetDay + " рублей");
