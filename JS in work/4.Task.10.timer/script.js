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
    let deadline = '2020-11-25';

    function gettimeRemaining(endtime) {
        // получение разницы между дедлайном (endtime) и текущим временем в миллисекундах
        let t = Date.parse(endtime) - Date.parse(new Date()),
            // получение секунд в целых числах (Math.floor())
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // вычитаем 3 часаб так как Date.parse() оперирует часовым поясом GMT + 0
            hours = Math.floor((t / (1000 * 60 * 60)) - 3);
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
            // как только разница между текущим временем и запланиванным (total) достигнет нуля:
            if (t.total <= 0) {
                // останавливаем таймер. Очищаем переменную timeInterval,  
                // которой присваивался интервал запуска функции (setInterval) 
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
    infoAll.addEventListener('click', function (event) {
        // получаем самый глубокий элемент, на котором произошло событие
        let target = event.target;
        // проверяем, было ли событие и содержит ли самый глубокий элемент события класс description-btn
        if (target && target.classList.contains('description-btn')) {
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
        statusMessage.innerHTML = '';
        // overlay.style.display = 'none';
        // // обращаемся к кнопке, которую нажали - убираем анимацию
        // more.classList.remove('more-splash');
        // // отменяем запрет на прокрутку страницы
        // document.body.style.overflow = '';
    });

    // Form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    // создание переменной для заполняемой формы
    let form = document.querySelector('.main-form'),
        footerForm = document.getElementById('form'),
        // создание переменной для поля ввода    
        input = document.getElementsByTagName('input'),
        // создание дива для уведомления о статусе
        statusMessage = document.createElement('div');
    // добавление класса к дива
    statusMessage.classList.add('.popup-form__label');

    // функция для отслеживания события отправки формы на сервер (submit) БЕЗ ПРОМИСОВ
    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            // отмена стандартного действия на странице: перезагрузка при отправке формы
            event.preventDefault();
            // добавдение к форме нового дива
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // // отпрвака данных на сервер в формате JSON
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 

            // получение данных введенных в input пользоватеем
            // для получения formData из HTML надо чтобы элемент input имел атрибут name
            let formData = new FormData(elem);
            // // для JSON:
            // создаем пустой объект для последующего наполнения его данными из formData 
            // let obj = {};
            // помещаем данные (ключ и значение) из объекта formData в obj
            // formData.forEach(function(value, key){
            //     obj[key] = value;
            // });
            // переводим полученный объект в формат JSON
            //    let json = JSON.stringify(obj);

            // отправка запроса на сервер. formData - это body 
            request.send(formData);
            //request.send(json);

            // добавление обработчика события к запросу
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    // добавляем заголовок к диву, взятый из объекта message 
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            // очистка всех input после отправки формы 
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }

    sendForm(footerForm);
    sendForm(form);

    // Slider 
    // параметр текущего слайда
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
        // если счетчик больше кол-ва слайдов
        if (n > slides.length) {
            // возвращаем к первому слайду
            slideIndex = 1;
        }
        // если счетчик меньше чем первый слайд
        if (n < 1) {
            // возвращаем к последнему файлу
            slideIndex = slides.length;
        }
        // перебор слайдов и их скрытие
        slides.forEach((item) => item.style.display = 'none');

        // аналог записи цикла 
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        // скрываем отображение всех точек
        dots.forEach((item) => item.classList.remove('dot-active'));

        // отображаем нужный слайд и точку под ним
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    // функция для изменения индекса слайда
    function plusSlides(n) {
        // вызывается функция отображения слайда с индексом на 1 больше, чем текущий
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        // при клике на точку, ее индекс передается сюда и отображатеся слайд с этим индексом
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        // при клике назад вызывается функция с индексом -1 и передает его в функцию, 
        // отображающую предыдущий слайд
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    // делегирование 
    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            // проверяем наличие класса dot у элемента, на который мы кликнули, и номер нажатой точки
            // если мы нажимаем на первую точку, цикл доходит до i = 1 и только тогда выполняется условие
            // если мы нажимаем на четвртую точку, цикл доходит до i = 4 (dots.length + 1) 
            // и только тогда выполняется условие
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    // calc 

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    // обработчик ввода в поле "кол-во людей"
    persons.addEventListener('change', function () {
        // получаем числовое выражение значения (value), вводимого в поле (persons), и записываем в personsSum
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        // если второе поле пустое, totalValue не меняется
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        // получаем числовое выражение значения (value), вводимого в поле (persons), и записываем в personsSum
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        // если второе поле пустое, totalValue не меняется
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    // обработчик выбора места поездки (place)
    place.addEventListener('change', function () {
        // если хотя бы одно из полей пустое, сумма не будет меняться 
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            // создаем временную переменную для текущего total из предыдущей функции
            let a = total;
            // получение атрибута value у выбранного места (place), умножение его на текущий total (a) 
            // и присвоение его к результату 
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


});


// // функция для отслеживания события отправки формы на сервер (submit) C ПРОМИСАМИ
// function sendForm(elem) {
//     elem.addEventListener('submit', function (event) {
//         // отмена стандартного действия на странице: перезагрузка при отправке формы
//         event.preventDefault();
//         // добавдение к форме нового дива
//         form.appendChild(statusMessage);
//         let formData = new FormData(elem);

//         function postData(data) {
//             return new Promise(function (resolve, reject) {
//                 let request = new XMLHttpRequest();
//                 request.open('POST', 'server.php');
//                 request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//                 request.onreadystatechange = function () {
//                     if (request.readyState < 4) {
//                         resolve();

//                     } else if (request.readyState === 4 && request.status == 200) {
//                         resolve();
//                     } else {
//                         reject();
//                     }
//                 };
//                 request.send(data);
//             });
//         }

//         function clearInput() {
//             for (let i = 0; i < input.length; i++) {
//                 input[i].value = '';
//             }
//         }

//         postData(formData)
//             .then(() => statusMessage.innerHTML = message.loading)
//             .then(() => {
//                 statusMessage.innerHTML = '';
//             })
//             .catch(() => statusMessage.innerHTML = message.failure)
//             .then(clearInput);

//     });
// }