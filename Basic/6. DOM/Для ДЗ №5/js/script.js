// создаем переменную для псевдомассива кнопок меню 
let menu = document.querySelector('.menu'),
    menuElem = document.querySelectorAll('.menu-item'),
    // создаем новый элемент с тегом "li"
    newMenuItem = document.createElement('li'),
    titleText = document.getElementById('title'),
    spamMessage = document.querySelector('.adv'),
    question = prompt("Как вы относитесь к технике Apple?", ""),
    promptDiv = document.getElementById('prompt');


// добавляем элементу такой же класс, как у остальных кнопок
newMenuItem.classList.add('menu-item');

// добавляем элемент в начало псевдомассива 
menu.append(newMenuItem);

// добавляем текст к элементу
newMenuItem.textContent = "Пятый пункт";

// меняем фоновую картинку 
document.body.style.backgroundImage = "url('/6. DOM/Для ДЗ №5/img/apple_true.jpg')";

// пизменяем текстовое содержимое заголовка
titleText.textContent = 'Мы продаем только подлинную технику Apple';

// удаляем элемент 
spamMessage.remove();

// записываем ответ пользователя на вопрос Question в элемент promptDiv
promptDiv.textContent = question;

// меняем названия кнопок
menuElem[1].textContent = 'Второй пункт';
menuElem[2].textContent = 'Третий пункт';