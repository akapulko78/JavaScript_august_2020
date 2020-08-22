// объявляем глобальные переменные, чтобы они были доступны внутри функций
let money, time;

// получаем переменную с ID 'start'
let startButton = document.getElementById('start'),
    // получаем псевдомассив из блоков с тегом 'div', 
    // чей непосредственный родитель имеет тег div с классом 'result-table'
    resultTable = document.querySelectorAll("div.result-table > div"),
    resultTableArr = [],
    expensesItem = document.getElementsByClassName('expenses-item'),
    approve = document.getElementsByTagName('button'),
    approveArr = [],
    expensesBtn = approve[0],
    optionalExpBtn = approve[1],
    calculateBtn = approve[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    // получение первого элемента селектора по ID (#) 
    possibleIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    // получение первого элемента по атрибуту for равному sum
    // sumValue = document.querySelector('[for = sum]'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];


// // получение элементов, которые не содержат текст 
// resultTable.forEach(function (item) {
//     if (item.textContent.length == 0) {
//         resultTableArr.push(item);
//     }
// });

// for (i = 0; i < approve.length; i++) {
//     // получение элементов с определенным текстом 
//     if (approve[i].innerText === 'Утвердить') {
//         approveArr.push(approve[i]);
//     }
//     if (approve[i].innerText === 'Рассчитать') {
//         calculate = approve[i];
//     }
// }

startButton.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    // проверяем что:
    // 1. введены числа, 
    // 2. строка не осталась пустой,
    // 3. не нажата кнопка ОТМЕНА 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    // создание объекта new Date, получение даты из введенной строки (time) Date.parse(), 
    // получение из этого объекта - года getFullYear() и присваивание его в атрибут value переменной year 
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        // записываем в переменные введенные пользователем значения
        // наименование расхода
        let a = expensesItem[i].value,
            // цена     
            b = expensesItem[++i].value;

        // проверяем: 
        // ввел ли пользователь строку (в случае с prompt это здесь по умолчанию); 
        // не нажал отмена на окне
        // не оставил пустую строку
        // не ввел ответ на первый вопрос длиннее 50 символов
        if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) === 'string' && (typeof (b) != null) &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            // записываем в объект expenses введенные пользователем значения, где а - ключ, в - значение
            appData.expenses[a] = b;
            // на каждой итерации цикла в переменную sum записывается число из введенной строки 
            sum += +b;
            // это аналог записи appData.expenses.a = b; Но здесь мы его использовать не можем
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExp = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExp;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        // if ((typeof (optExp)) === 'string' && (typeof (optExp) != null) && optExp != '' && optExp.length < 50) {
        //     console.log('done');

        // } else {
        //     i = i - 1;
        // }
    }
});

calculateBtn.addEventListener('click', function () {
    // проверка инициализации переменной
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка';
    }
});

// при обработчике события input текст выводится одновеменно с вводом на отслеживаемом объекте
// при обработчике события change тест выводится при клике вне отслеживаемого объекта  
possibleIncome.addEventListener('change', function () {
    let items = possibleIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        // если хотим получить число вместо строки, надо поставить вначале + 
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

// Объект:
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    // // записываем функцию как метод объекта appData
    // chooseExpenses: function () {

    // },
};


//     // в массив income записываются все ответы (items) через запятую и пробел
//     appData.income = items.split(', ');

