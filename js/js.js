let arr = [];
let a = 0;
let formatted;
let sumaArr = 0;

do {
    let lengthArr = prompt(`Какая длина масива?`,``);
    if (lengthArr !== null && lengthArr !== ``) {
        formatted = Math.round(Math.abs(lengthArr));
        if (formatted > 1 && formatted < 11) {
            for (let i = 0; i < formatted ; i++) {
                let randomValue = Math.round(Math.random()*10);
                arr.push(randomValue);
                sumaArr *= randomValue;
            }
            a+=1;
        }
    }
}while (a < 1);

console.log(arr);
console.log(sumaArr)


