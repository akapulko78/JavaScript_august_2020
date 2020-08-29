let box = document.querySelector('.box'),
    btn = document.querySelector('button');
    // получаемые значения работают только для чтения:

    // // контент + паддинги. Без прокрутки и бордера
    // width = box.clientWidth,
    // height = box.clientHeight;

    // // контент + паддинги, полоса прокрутки и бордер
    // width = box.offsetWidth,
    // height = box.offsetHeight;

    // все вместе со скроллом
    let width = box.clientWidth,
    height = box.clientHeight;


    // растояния в JS: 
    // left - от левого края страницы до левого края элемента;
    // right - от левого края страницы до правого края элемента;
    // top - от верхнего края страницы до верхнего края элемента;
    // bottom - от верхнего края страницы до нижнего края элемента; 
    

    btn.addEventListener('click', function(){
        // // в стилях высоте элемента присваиваем значение такое же как высота элемента с прокруткой
        // // добавляем 'px', так как scrollHeight получает значение без едениц измерения 
        // box.style.height = box.scrollHeight + 'px';
        // // отображает пролистанное сверху расстояние
        // console.log(box.scrollTop);\
        // пролистываем к началу
        box.scrollTop = 0;

    });

console.log(width);
console.log(height);
// // получение всех координат
// console.log(box.getBoundingClientRect());
// получение левой координаты
console.log(box.getBoundingClientRect().left);
// получение ширины страницы
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// прокрутка всей страницы до самого верха
document.documentElement.scrollTop = 0;