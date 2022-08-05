const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
];

function getPrice (products,seasonFunc = null) {
    const copiedProducts = [...products];
    let suma = 0;
    for (let i = 0; i < copiedProducts.length;i++) {
        if (seasonFunc === null ) {
            suma += copiedProducts[i][1];
        }else {
            suma += seasonFunc(copiedProducts[i][1]);
        }
    }
    return suma;
}


function summerValue(value){
    return value*0.8;
}
function winterValue(value){
    return value*2;
}


console.log(getPrice(products,summerValue));
console.log(getPrice(products,winterValue));
console.log(getPrice(products,));

