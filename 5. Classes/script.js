// // реалзиция в ES5

// function User(name, id) {
//     // прописываем св-ва бужущего объекта
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     // прописываем метод объекта
//     this.hello = function () {
//         // обращение к св-ву name объекта
//         console.log('Hello, ' + this.name);
//     };
// }
// // добавление нового метода в конструктор, который будет прототипно наследоваться от потомков
// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' вышел');
// };


// let Ivan = new User('Ivan', 25),
//     Alex = new User('Alex', 20);

// console.log(Ivan);
// console.log(Alex);

// Ivan.exit();


// реалзиция в ES6

// class User {
//     constructor(name, id) {
//         // прописываем св-ва бужущего объекта
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     // прописываем метод объекта
//     hello() {
//         // обращение к св-ву name объекта
//         console.log('Hello, ' + this.name);
//     }
//     // добавление нового метода в конструктор, который будет прототипно наследоваться от потомков
//     exit() {
//         console.log(`Пользователь ${this.name} вышел`);
//     }
// }


// let Ivan = new User('Ivan', 25),
//     Alex = new User('Alex', 20);

// console.log(Ivan);
// console.log(Alex);

// Ivan.exit();

// ______________________________________________________________
// this
// // 1) Простой вызов функции: this == window или undefined 
// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         // замыкание функции: программа не находит a и b в функции sum и поднимается выше к showThis 
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// 2) Метод объекта: this == объект 
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout (){
//             console.log(this);
//         }
//         // не имеет контекста, так как ввызвана как обычная функция, а не метод
//         shout();
//     }
// };
// obj.sum();

// 3) Конструктор (new): this == новый созданный объект

// 4) Указание конкретного контекста: call, apply, bind 

// let user = {
//     name: 'John'
// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }
// // принудительная связь функции с объектом:
// // для передачи аргумента в виде строки
// console.log(sayName.call(user, 'Smith'));
// // для передачи аргумента в виде массива
// console.log(sayName.apply(user, ['Snow']));

// function count(number){
//     return this * number;
// }

// // привязка аргумента в bind (2) в качестве контектса вызова к функции(count)
// let double = count.bind(2);
// console.log(double(3));  //6
// console.log(double(10));  //20


let btn = document.querySelector('button');
// контекстом вызова будет элемент, на котором происходит событие
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});