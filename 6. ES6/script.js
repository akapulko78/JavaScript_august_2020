// // интерполяция 

// let name = "Dan",
//     age = 31,
//     mail = 'mail@mail.com';

//     document.write(`Пользователю ${name} ${age} лет. Его адрес: ${mail}`);



// let / var
function makeArray() {
    var items = [];

    // при использовании var переменная i создается одна и не меняется при итерациях
    // for(var i = 0; i < 10; i++){
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        // добавляем функции в массив при каждой итерации
        items.push(item);
    }
    // возвращаем массив
    return items;
}

var array = makeArray();
// вызываем функцию которая, является первым элементом массива 
array[1]();
array[3]();
array[7]();



// стрелочные функции. 
// Не имеют своего контекста вызоав (this), получает его у родителя
// помещаем в переменную fun анонимную стрелочную фнукцию
let fun = () => {
    console.log(this);
};

//fun(); // window

// создаем объект 
let obj = {
    number: 5,
    // создаем метод объекта
    sayNumber: function () {
        // создаем стрелочную функцию внутри метода 
        let say = () => {
            console.log(this);
        };
        say();
    }
};
// обращаемся к функции объекта
obj.sayNumber(); // {number: 5, sayNumber: ƒ}

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show(); //<button>Push me</button>
});


// параметры по умолчанию 
function calcOrDouble(number, basis = 2) {
    // если значение basis существует (передано в аргументе функции), то используетя оно, если нет - 2. 
    // basis = basis || 2; // ES5
    console.log(number * basis);
}

calcOrDouble(2, 4);
calcOrDouble(6);


// классы

class Reсtangle {
    constructor(height, width) {
        // высота каждого экземпляра класса (this.height) равна параметру (height), переданному в аргументе  
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
// создаем экземпляр класса
const square = new Reсtangle(10, 10);

// обращаемся к методу экземпляра
console.log(square.calcArea()); // 100



// spread (разворот)
// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'bloger', 'LJ'],
//     internet = [video, blogs, 'VK', 'FB'];

// console.log(internet);
// 0: (3) ["youtube", "vimeo", "rutube"]
// 1: (3) ["wordpress", "bloger", "LJ"]
// 2: "VK"
// 3: "FB"

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'bloger', 'LJ'],
    internet = [...video, ...blogs, 'VK', 'FB'];

console.log(internet); // ["youtube", "vimeo", "rutube", "wordpress", "bloger", "LJ", "VK", "FB"]

function log (a, b, c){
    console.log(`first ${a}`);
    console.log(`second ${b}`);
    console.log(`third ${c}`);
    console.log(a + b + c);
}

let num = [2, 5, 7];

log(...num); // first / 2 second / 5 third 7 / 14