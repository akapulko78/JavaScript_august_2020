let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    firstQuestion = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQuestion = prompt("Во сколько обойдется?");

//console.log(typeof (money));


let appData = {
    money,
    timeData: time,
    expenses: {
        firstQuestion: secondQuestion
    },
    optionalExpenses: "",
    income: "",
    savings: false
};

console.log(appData.expenses);