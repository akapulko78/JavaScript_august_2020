// событие сробатывает, когда зуагрузилась вся структура DOM 

window.addEventListener('DOMContentLoaded', function () {
    // 'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // скрывает ненужные элементы tabcontent со страницы
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            // удаление класса show из списка классов элемента tabContent[i] 
            tabContent[i].classList.remove('show');
            // добавление класса hide к списку классов элемента tabContent[i] 
            tabContent[i].classList.add('hide');
        }
    }
    // при вызове функции скроются все элементы tabContent кроме первого (нулевого) 
    hideTabContent(1);

    // функция показывает необходимый элемент tabContent  
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // обработчик события при клике на табы. Используется делегирование
    info.addEventListener('click', function (event) {
        let target = event.target;
        // определение элемента на который клмкнули
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                // если то, куда мы нажали, полностью сопадает с перебираемым табом
                if (target == tab[i]) {
                    // скрываем все табы
                    hideTabContent(0);
                    // отображаем таб, на который кликнули
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});