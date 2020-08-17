    // получение кнопки для работы. Это псевдомассив, содержащий все кнопки на сайте
let btn = document.querySelectorAll('button'),
    // получение элемента с классом "wrapper" и добавление его в переменную "wrap"
    wrap = document.querySelector('.wrapper');
link = document.querySelector('a');


// btn[0].onclick = function() {
//     alert('You have clicked on the first button');
// };


// второй более правильный способ. Используется callback function (выполняется строго полсе клика)
btn[0].addEventListener('click', function (event) {
    // console.log(event);
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);

    // let target = event.target;
    // скрытие элмента при нажатии:
    // target.style.display = 'none';
});

// wrap.addEventListener('click', function () {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// link.addEventListener('click', function (event) {
//     // отмена стандартного действия на странице (перехода по ссылке)
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// добавление обработчика события (покидание мыши зоны кнопки) ко всем кнопкам
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log("exit");
    });
});

// btn[0].addEventListener('click', function(){
//     alert('You have clicked on the first button again');
// });

// btn[0].addEventListener('mouseenter', function(){
// alert("you pointed on the first button");
// });