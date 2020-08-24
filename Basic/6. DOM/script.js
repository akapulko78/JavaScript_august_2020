// получение элемента на странице по его ID 
let box = document.getElementById('box'),
    // получение элементов по тегам
    btn = document.getElementsByTagName('button'),
    // получение элементов по имени класса
    circle = document.getElementsByClassName('circle'),
    // получение элементов по селектору
    heart = document.querySelectorAll('.heart'),
    // получение первого элемента по селектора
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btn);
// console.log(btn[0]); 
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

//изменение стилей
box.style.backgroundColor = 'blue';

// btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// измененеи цвета всех элементов псевдомассива через цикл

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// так как прописана коллбэк-функция, она выполниться после функции foreach 
// heart.forEach(function (item) {
//     item.style.backgroundColor = 'blue';
// });

// создание элемента
let div = document.createElement('div'),
    text = document.createTextNode('something text');

// добвление класса к элементу
div.classList.add('black');

// добавление в конец блока body:
// document.body.appendChild(div);
wrapper.appendChild(div);  


// добавление текста на страницу:
// добавляется заголовок
// div.innerHTML = '<h1>Hello World!</h1>';

// добавляется только текст (для безопасности, если, напрмер, вводит пользователь)
div.textContent = '<h1>Hello World!</h1>'; 
// добавление перед элементом:

document.body.insertBefore(div, circle[0]);

// удаление:

// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);

// // замена одного элемента другим. Элемент, который заменяют, пропадает. 
// document.body.replaceChild(btn[0], circle[1]);

console.log(div);

console.log(text);