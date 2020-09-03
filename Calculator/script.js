// let first = document.getElementById('firstInt'),
//     second = document.getElementById('secondInt'),
//     multBtn = document.getElementById('multiButton'),
//     sumBtn = document.getElementById('sumButton'),
//     res = document.getElementsByClassName('budget-value');

//     alert('Введите 2 целых числа в поля');

function Calculator() {

    this.read = function () {
        this.first = prompt('Введите первое число');
        this.second = prompt('Введите второе число');
    };

    this.sum = function () {
        return (+this.first + (+this.second));
    };

    this.mul = function () {
        return (this.first * this.second);
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());