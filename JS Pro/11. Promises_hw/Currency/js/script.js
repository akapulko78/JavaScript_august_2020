let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

// при вводе в 'input' срабатывает анонимная фнукция конвертирования

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {
        // создается объект prom с двумя функциями resolve и reject, которые выполняются внутри
        let prom = new Promise((resolve, reject) => {
            if (request.readyState === 4 && request.status == 200) {
                // если успешно, выполнить код в .then
                resolve();
            } else {
                // если неуспешно, выполнить код в .catch
                reject();
            }
        });
        prom
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(inputUsd.value = "Что-то пошло не так!");
    });

});



// request.addEventListener('readystatechange', function () {
//     if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         inputUsd.value = inputRub.value / data.usd;
//     } else {
//         inputUsd.value = "Что-то пошло не так!";
//     }
// }); 

// let f1 = function () {
//     if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         inputUsd.value = inputRub.value / data.usd;
//     } else {
//         inputUsd.value = "Что-то пошло не так!";
//     }
// };

// request.addEventListener('readystatechange', f1);