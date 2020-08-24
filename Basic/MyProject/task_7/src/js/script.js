// получаем переменную с ID 'start'
let beginCalc = document.getElementById('start'),
    // получаем псевдомассив из блоков с тегом 'div', 
    // чей непосредственный родитель имеет тег div с классом 'result-table'
    resultTable = document.querySelectorAll("div.result-table > div"),
    arr = [''],
    reqExp = document.getElementsByClassName('expenses-item'),
    approve = document.getElementsByTagName('button'),
    approveArr = [],
    calculate,
    optionalexpenses = document.querySelectorAll('input.optionalexpenses-item'),
    
    // получение первого элемента селектора по ID (#) 
    possibleIncome = document.querySelector('#income'),
    chekBoxField = document.querySelector('#savings'),
    // получение первого элемента по атрибуту for равному sum
    summ = document.querySelector('[for = sum]'),
    percent = document.querySelector('[for = percent]'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


// получение элементов, которые не содержат текст 
resultTable.forEach(function (item) {
    if (item.textContent.length == 0) {
        arr.push(item);
    }
});

for (i = 0; i < approve.length; i++) {
    // получение элементов с определенным текстом 
    if (approve[i].innerText === 'Утвердить') {
        approveArr.push(approve[i]);
    }
    if (approve[i].innerText === 'Рассчитать') {
        calculate = approve[i];
    }
}