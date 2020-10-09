let drink = 0;

function shoot(arrow) {
    console.log('вы сделали выстрел...');
    // resolve - когда обещание выполнилось, reject - когда нет
    let promise = new Promise(function (resolve, reject) {
        // выполнение функциии с задержкой в 3 секунды
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("вы промахнулись");
        }, 3000);
    });

    return promise;
}

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили');
}

function loose() {
    console.log('Вы проиграли!');
}

// вызов функции
shoot({})
    // в случае resolve:
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    // в случае reject:
    .catch(loose); 







// let drink = 0;

// function shoot (arrow, headshot, fail){
//     console.log('вы сделали выстрел...');
//     // выполнение функциии с задержкой в 3 секунды
//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("вы промахнулись");
//     }, 3000);
// }
// function win(){
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer(){
//     console.log('Вам купили пиво');
// }

// function giveMoney(){
//     console.log('Вам заплатили');
// }

// function loose(){
//     console.log('Вы проиграли!');
// }

// // вызов функции
// shoot({}, 
//     function(mark) {
//         console.log('вы попали в цель');
//         win(mark, buyBeer, giveMoney);
//     },
//     function(miss){
//         console.error(miss); 
//         loose();
//     }
//     );