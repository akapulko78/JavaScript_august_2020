// так как данные с сервера приходят в JSON формате, имитируем работу сервера с помощью файла curent.json

// получаем переменные для полей ввода
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

// создаем обработичк события для полей ввода
// при вводе (input) каждого символа будет срабатывать функция конвертирования
inputRub.addEventListener('input', () => {
    console.log("произошло событие input");
    // создаем обьект XMLHttpRequest
    let request = new XMLHttpRequest();

    // метод настройки AJAX-запроса:
    // request.open(method, url, async, lopin, pass); 
    // Аргументы: 
    // method (метод общения клиента с сервером: get или post)
    // URL - путь к серверу
    // async - ассинхронность запроса. 
    // По умолчанию true, елси false - пока серер не отетит, не сможем взаимодействовать со страницей 
    // логин
    // пароль
    request.open('GET', 'js/current.json');
    // метод настройки HTTP-запросов
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // метод запроса к серверу. body - тело запроса.  
    request.send();

    // св-ва: 
    // status - показывает код ответа (состояние) сервера
    // statusText - то же самое в текстовом виде
    // responseText/response - текст ответа сервера - то, за чем мы обращаемся к серверу
    // readyState - ткущее состояние запроса 

    // добавление обработчика события на запрос
    request.addEventListener('readystatechange', function () {
        console.log("произошло событие readyStateChange");
        // в качестве альтернативы readyStateChange можно сипользовать обработчик события load - 
        // оно срабатывает, когда запрос польностью загружен без ошибок

        // проверка состояния сервера и его ответов
        if (request.readyState === 4 && request.status == 200) {
            // получаем ответ от сервера (request.response) и переводим полученный JSON в формат объекта JS 
            let data = JSON.parse(request.response);
            // в переменную inputUsd записываем значение из переменной inputRub / на св-во объекта data (68)
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
});