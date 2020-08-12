// объявляем глобальные переменные, чтобы они были доступны внутри функций
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    // проверяем что:
    // 1. введены числа, 
    // 2. строка не осталась пустой,
    // 3. не нажата кнопка ОТМЕНА 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
// Вызываем функцию
start();

// Объект:
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    // записываем функцию как метод объекта appData
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            // записываем в переменные введенные пользователем значения
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

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
                // это аналог записи appData.expenses.a = b; Но здесь мы его использовать не можем
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        // проверяем наличие накоплений
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            // рассчитываем месячный доход от депозита
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депоита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optExp = prompt("Статья необязательных расходов?", "");
            if ((typeof (optExp)) === 'string' && (typeof (optExp) != null) && optExp != '' && optExp.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = optExp;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', "");
        if (typeof (items) === 'string' && (typeof (items) != null) && items != '') {
            // в массив income записываются все ответы (items) через запятую и пробел
            appData.income = items.split(', ');
        } else {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', "");
        }
        // добавление элемента в конец массива
        appData.income.push(prompt('Может что-то еще?'));
        // сортировка по алфавиту
        appData.income.sort();
        appData.income.forEach(function callbackfn(element, index){
            console.log((index + 1) + '. ' + 'Способы доп. заработка: ' + element);
        });
    }
};

for (const key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}

// // второй вариант цикла
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) === 'string' && (typeof (b) != null) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         i++;
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// }

// третий вариант цикла
// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) === 'string' && (typeof (b) != null) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         i++;
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// }
// while (i < 2); 

// кол-во денег в день
// округляет до (кол-во знаков полсе запятой = числу в параметре метода toFixed(). Возвращает строку