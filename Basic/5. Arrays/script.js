// let arr = [1, 2, 3];

// // arr[99] = 99; // добаяляет эдемент не последним, а именно 99-ым.

// console.log(arr.length); // выводит длинну - "100"

// // arr.pop(); // удаление элемента в конце

// // arr.push("5"); // добавление элемента в конец списка

// // arr.shift(); //удаление первого элмента 

// // arr.unshift("1"); // добавлениие элемента в начало

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){ //foreach форматируемый способ получения значений
//     console.log(i + ': ' + item + " (array: " + mass + ')');
// });


// console.log(arr);

// let mass = [1,2,3,4,5,6,7];

// for (let key in mass) { //forin получение ключей (порядковых номеров элементов)
//     console.log(key);
// }
// for (let key of mass){ //forof получение значений массива
//     console.log(key);
// }

// запрос ввода от пользователя, где каждый элемент введенный через запятую, 
// будет распознаваться как элемент массива

// let answer = prompt("", ""), 
//     arr = [];

//     arr = answer.split(','); //определение разделителя - запятой
//     console.log(arr); 


// let arr = ["qqq", "wwww", "eee"];
// i = arr.join(', '); //добавляет все элементы массива в одну общую строку

// console.log(i);

// let arr = ["qqq", "wwww", "eee"];
// i = arr.sort(); //сортирует элементы 

// console.log(arr);

let arr = [1, 15, 4]; 
i = arr.sort(compareNum); // для сортировки числек необходиом использовать коллбэк функцию

function compareNum(a, b) {
    return a - b;
}
console.log(arr);


//ООП :

// Потомок
let solder = {
    health: 400,
    armor: 100
};
//Наследник
let john = {
    health: 100
}

john.__proto__ = solder;
console.log(john);
console.log(john.armor);