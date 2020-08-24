"use strict";
// let num = 20; // глобальная переменная 

// function declaration: создается сразу при инициализации кода, поэтому к ней можно обращаться даже в коде,
// который находиться до места, где она написана. 

// function showFirstMessage(text) {
//     alert(text);
//     num = 10; // локальная переменная видна только внутри функции
// }

// showFirstMessage("Hello World!"); 
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3, 4));
// console.log(calc(5, 7));

// function returnVar(){
//     let num = 50;
//     return num;
// }

// let anotherNum = returnVar();
// console.log(anotherNum); 

// function expression: функциональное выражение. Создается только тогда, когда до нее доходит процесс
// let calc = function (a, b) {
//     return (a + b);
// }

// // запись этой функции в новом формате ЕС6. Можно использовать не во всех случаях. 
// let calc = (a,b) => a + b; // фигурные скобки можно опустить, если выражение маленькое

// console.log(calc(3, 4));
// console.log(calc(5, 7));


// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve)); 
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// обеспечение выпрлнения одной функции строго после другой 
function learnJS(lang, callback){
    console.log("i learn " + lang);
    callback();
}

learnJS("JavaScript", function(){
    console.log("i have done third lesson");
});

//второй вариант:
// callback-функция - это функция которая выполняется строго после той, в качестве аргумента которой она выступает
// function done выполнится строго после function learnJS
function learnJS(lang, callback){
    console.log("i learn " + lang);
    callback();
}

function done(){
    console.log("i have done third lesson");
}

learnJS("JavaScript", done);