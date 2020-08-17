// получаем переменную с ID 'start'
let beginCalc = document.getElementById('start'),
// получаем псевдомассив из блоков с тегом 'div', 
// чей непосредственный родитель имеет тег div с классом 'result-table'
    resultTable = document.querySelectorAll("div.result-table > div"),
    valueBlocks = document.getElementsByClassName('*value');
    let arr = ['first'];

    
resultTable.forEach(function (item) {
    if (item.textContent.length == 0){
        arr.push(item);
    }
});