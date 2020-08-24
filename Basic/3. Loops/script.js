let num = 50;

if (num < 49) {
    console.log("false");
} else if (num > 100) {
    console.log("too much!");
} else {
    console.log("true!!");
};
// та же запись в виде теранрного оператора
(num == 50) ? console.log("true!!!"): console.log("false");

switch (num) {
    case num < 49:
        console.log("false");
        break;
    case num > 100:
        console.log("too much!");
        break;
    case num > 80:
        console.log("still too much!");
        break;
    case 50:
        console.log("true!!");
        break;
    default:
        console.log("somethig goes wrong");
}


//циклы 

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 0; i < 8; i++) {
    if (i == 6) {
        continue; // прерывание одной итерации цикла
    }
    console.log(i);
}

// // второй вариант цикла
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) === 'string' && (typeof (b) != null) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         i++;
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// }

// третий вариант цикла
// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) === 'string' && (typeof (b) != null) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         i++;
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// }
// while (i < 2); 