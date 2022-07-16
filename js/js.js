const string = prompt('напишите любую строку','');
const ID = Number(prompt('введите номер операции',''));

const randomInt = getRandomIntInclusive(0, 10);
const smile = ['0x1F621','0x1F622','0x1F623','0x1F624','0x1F625','0x1F626','0x1F627','0x1F628','0x1F629','0x1F630'];
let symbol;

switch (ID){
    case 1 :
        symbol = Number(prompt('скажите номер символа',''));
        let newStr1 = string[symbol];
        console.log(newStr1.charCodeAt(0));
        break;
    case 2 :
        symbol = Number(prompt('скажите номер символа какой надо удалить',''));
        let newStr2 = string.slice(0, symbol) + string.slice(symbol + 1);
        console.log(newStr2);
        break;
    case 3 :
        symbol = Number(prompt('скажите какой символ заменить на смайлик',''));
        let newStr3 = string.substring(0, symbol) + String.fromCodePoint(smile[randomInt])  + string.substring(symbol + 1,);
        console.log(newStr3);
        break;
    case 4 :
        let newStr4 = string.replace(/\s/g, '');
        console.log(newStr4.length);
        break;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}



