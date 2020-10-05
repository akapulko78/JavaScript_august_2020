// функция (т.е. весь наш код) сробатывает, когда зуагрузилась вся структура DOM 

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // получаем табы
    let tab = document.querySelectorAll('.info-header-tab'),
        // получаем родителя табов (для делегирования события)
        info = document.querySelector('.info-header'),
        // получаем контент табов
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
    // нужно чтобы при загрузке страницы было видно содержимое только перовго таба 
    hideTabContent(1);

    // функция показывает необходимый элемент tabContent  
    function showTabContent(b) {
        // если контент скрыт
        if (tabContent[b].classList.contains('hide')) {
            // убрать класс hide
            tabContent[b].classList.remove('hide');
            // добавить класс отобразить 
            tabContent[b].classList.add('show');
        }
    }

    // обработчик события при клике на родителя табов. Используется делегирование
    info.addEventListener('click', function (event) {
        let target = event.target;
        // проверяем, что был клик именно на табе
        if (target && target.classList.contains('info-header-tab')) {
            // перебыираем все табы
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