// // запись в таблицу - ключ-значение

// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// // удаление элемента по ключу
// localStorage.removeItem("number");

// // очистка таблицы
// localStorage.clear();

// проверка полной загрузки страницы
window.addEventListener("DOMContentLoaded", function () {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName("form")[0];

    // если в таблице есть запись о нажатом чекбоксе, то чекбокс остается активным даже при переагрузки страницы
    if (localStorage.getItem("isChecked") === "true") {
        // установка чекбокса в положение "отмечен" 
        checkbox.checked = true;
    }
    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#FF4766";
    }
    // отслеживание события клика на чекбокс
    checkbox.addEventListener('click', function () {
        // добавление записи в таблицу о нажатом чекбоксе  
        localStorage.setItem("isChecked", true);
    });
    // отслеживание события клика на кнопку 
    change.addEventListener('click', function () {
        // добавление записи в таблицу
        localStorage.setItem('bg', 'changed');
        // изменение цвета
        form.style.backgroundColor = "#FF4766";
    });

    let person = {
        name: "Dan",
        age: 31,
        tech: ["phone", "laptop"]
    };

    // сериализация объекта person 
    let serializedPersone = JSON.stringify(person);
    // добавление объекта в таблицу
    localStorage.setItem("Dan", serializedPersone);
    // вывод в консоль объекта
    console.log(JSON.parse(localStorage.getItem("Dan")));

});