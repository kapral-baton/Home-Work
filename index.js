let button = document.querySelector('button');
let element = document.querySelector('#element');

let figure = document.querySelector('select');
let colors = document.querySelector('#color')

let classFigur = figure.value;


button.addEventListener('click',event => {
    event.preventDefault();
    console.log(figure.value);
    console.log(colors.value );

    element.style.backgroundColor = colors.value;


    switch (figure.value) {
        case "square" :
            element.classList.toggle(`${classFigur}`, false);
            element.classList.add('square');
            classFigur = figure.value;
            break;
        case "rectangle" :
            element.classList.toggle(`${classFigur}`, false);
            element.classList.add('rectangle');
            classFigur = figure.value;
            break;
        case "circle" :
            element.classList.toggle(`${classFigur}`, false);
            element.classList.add('circle');
            classFigur = figure.value;
            break;
    }
});