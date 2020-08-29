// запуск функции через определенный промежуток времени
// let timerId = setTimeout(sayHello, 3000);
// // остановка setTimeout
// clearTimeout(timerId);

// запуск функции каждый определенный промежуток времени
// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);
// function sayHello(){
//     console.log('Hello World!');
// }

// // рекурсивный вызов позволяет сохранить установленную паузу, 
// //даже если код внутри функции выполняется дольше самой паузы
// let timerID = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let button = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    // каждые 10 миллисекунд запускается функция frame
    let id = setInterval(frame, 10);

    function frame() {
        // отслеживается позиция квадрата
        if (pos == 300) {
            // при достижении координат квадрата top и left значения 300, setInterval (id) останавливается  
            clearInterval(id);
        } else {
            pos++;
            // получаем координаты квадрата и присваиваем ему координаты pos (изменяем стиль)
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
// запускаем анимацию при нажатии на кнопку
button.addEventListener('click', myAnimation);


// делегирование: обработка логики предоставляется родителю. В данном случае - селектору btn-block


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    // проверяем, существует ли целевой элемент, на котором был клик и
    // имеет ли этот элемент тэг BUTTON    
    // if (event.target&&event.target.tagName == 'BUTTON') {
    // проверяем, имеет ли элемент определенный класс
    // if (event.target && event.target.classList.contains('first')) {
    // проверяем, имеет ли элемент определенный элемент с определенным классом
    if (event.target && event.target.matches('button.first')) {
        console.log('hello');
    }
});