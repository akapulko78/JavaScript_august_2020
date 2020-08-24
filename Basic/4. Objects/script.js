"use strict";

//создание объекта
let options = {
    // св-ва объекта
    width: 1024,
    height: 1024,
    name: "test",
    bool: false // аналогичные записи
};

console.log(options.name);
options.bool = false; // аналогичные записи
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log('value of ' + key + ' is ' + options[key]);
}

console.log(Object.keys(options).length);