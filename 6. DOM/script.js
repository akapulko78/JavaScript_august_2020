// получение элемента на странице по его ID 
let box = document.getElementById('box'),
    // получение элементов по тегам
    btn = document.getElementsByTagName('button'),
    // получение элементов по имени класса
    circle = document.getElementsByClassName('circle'),
    // получение элементов по селектору
    heart = document.querySelectorAll('.heart'),
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
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

// создание элемента
let div = document.createElement('div'),
    text = document.createTextNode('something text');

// добвление класса к элементу
div.classList.add('black');
// добавление после элемента:

// document.body.appendChild(div);
// wrapper.appendChild(div);  


// добавление текста на страницу:

// div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = '<h1>Hello World!</h1>'; // добавляется только текст (безопасность)

// добавление перед элементом:

document.body.insertBefore(div, circle[1]);

// удаление:

document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

// замена одного элемента другим

document.body.replaceChild(btn[1], circle[1]);

console.log(div);

console.log(text);