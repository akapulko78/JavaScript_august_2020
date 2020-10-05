let options = {
    width: '1366',
    height: '768',
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    } 
};

// превращение в JSON 
//console.log(JSON.stringify(options));

// обратная операция
console.log(JSON.parse(JSON.stringify(options)));