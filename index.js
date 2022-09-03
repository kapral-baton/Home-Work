const blockWidth = 100;
const blockHeight = 100;

let block = document.querySelector('.block');
let wrapper = document.querySelector('.wrapper')

function changeBlock(wrapper) {
    const colorRange = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    let color = '#';
    for(let i = 0; i < 6 ; i++){
        color += colorRange[Math.floor(Math.random() * 16)];
    }
    block.style.backgroundColor = color;
    block.style.left = Math.floor(Math.random() * (wrapper.clientWidth - blockWidth)).toString() + 'px';
    block.style.top = Math.floor(Math.random() * (wrapper.clientHeight - blockHeight)).toString() + 'px';
}

setInterval(() => changeBlock(wrapper),2000);


