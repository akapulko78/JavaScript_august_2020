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

    // Timer
    // дата до которой устанавливается таймер 
    let deadline = '2020-09-15';

    function gettimeRemaining(endtime) {
        // получение разницы между дедлайном (endtime) и текущим временем в миллисекундах
        let t = Date.parse(endtime) - Date.parse(new Date()),
            // получение секунд в целых числах (Math.floor())
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // вычитаем 3 часаб так как Date.parse() оперирует часовым поясом GMT + 0
            hours = Math.floor((t / 1000 / 60 / 60) - 3);
        // возварщаем объект содержащий все переменные
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        // получаем элемент верстки (внутри блока timer), отображающий таймер, по ID 
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // запускаем функцию updateClock кажду секунду
            timeInterval = setInterval(updateClock, 1000);

        // функция для динамического обновления элементов выше
        // потом попробовать реализоват через https://learn.javascript.ru/js-animation
        function updateClock() {
            // каждый раз при запуске функции создается переменная t,   
            // которой присваивается объект из функции gettimeRemaining.  
            let t = gettimeRemaining(endtime);
            // получаем обнрвленные данные по часам, минутам и секундам из объекта и записываем в верстку
            hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;
            // как только разница между текущим временем и запланиванным достигнет нуля:
            if (t.total <= 0) {
                // останавливаем таймер. Переменной timeInterval присваивался интервал запуска функции выше 
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        toKnow = document.querySelectorAll('.description-btn'),
        // получаем общего родителя
        infoAll = document.querySelector('.info'),
        isModOnDisp = false;



    function showModal() {
        if (isModOnDisp == false) {
            overlay.style.display = 'block';
            // обращаемся к кнопке, которую нажали - добавляем анимацию
            more.classList.add('more-splash');
            // запрет на листание страницы пока открыто модальное окно  
            document.body.style.overflow = 'hidden';
            isModOnDisp = true;
        } else {
            overlay.style.display = 'none';
            // // обращаемся к кнопке, которую нажали - убираем анимацию
            more.classList.remove('more-splash');
            // // отменяем запрет на прокрутку страницы
            document.body.style.overflow = '';
            isModOnDisp = false;
        }
    }

    // обработка события нажатия на кнопке "Узнать подробнее"
    infoAll.addEventListener('click', function(event){
        // получаем самый глубокий элемент, на котором произошло событие
        let target = event.target;
        // проверяем, было ли событие и содержит ли самый глубокий элемент события класс description-btn
        if(target && target.classList.contains('description-btn')){
            showModal();
        }
    });

    // обработка события нажатия на кнопке "Узнать Больше"

    more.addEventListener('click', function () {
        showModal();
        // overlay.style.display = 'block';
        // // обращаемся к кнопке, которую нажали - добавляем анимацию
        // this.classList.add('more-splash');
        // // запрет на листание страницы пока открыто модальное окно  
        // document.body.style.overflow = 'hidden';
    });

    // обработка события нажатия на кнопке закрытия всплывающего окна
    close.addEventListener('click', function () {
        showModal();
        // overlay.style.display = 'none';
        // // обращаемся к кнопке, которую нажали - убираем анимацию
        // more.classList.remove('more-splash');
        // // отменяем запрет на прокрутку страницы
        // document.body.style.overflow = '';
    });
});