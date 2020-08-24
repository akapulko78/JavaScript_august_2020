    // получение кнопки для работы. Это псевдомассив, содержащий все кнопки на сайте
    let btn = document.querySelectorAll('button'),
        // получение элемента с классом "wrapper" и добавление его в переменную "wrap"
        wrap = document.querySelector('.wrapper');

    // получение элемента по тегу а
    link = document.querySelector('a');

    // событие при клике
    // btn[0].onclick = function() {
    //     alert('You have clicked on the first button');
    // };

    // событие при наведении
    // btn[0].addEventListener('mouseenter', function(){
    // alert("you pointed on the first button");
    // });


    // второй более правильный способ. Используется callback function (выполняется строго полсе клика)
    // при добапвлении параметра event в функции колбэк, можно получить данные о событии 
    btn[0].addEventListener('click', function (event) {
        // console.log(event);
        console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);

        // сохранение объекта события в отдельной переменной
        // let target = event.target;
        // скрытие элмента при нажатии:
        // target.style.display = 'none';
    });
    // всплытие события - ситуация, при которой событие происходит сначала на дочернем элементе,
    // а потом на родительских элементах (если обработсик события создан для обоих элементов)

    // wrap.addEventListener('click', function () {
    //     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
    // });

    link.addEventListener('click', function (event) {
        // отмена стандартного действия на странице (перехода по ссылке)
        event.preventDefault();
        event.onclick   
        console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
    });


    // добавление обработчика события (покидание мыши зоны кнопки) ко всем кнопкам
    btn.forEach(function (item) {
        item.addEventListener('mouseleave', function () {
            console.log("exit");
        });
    });