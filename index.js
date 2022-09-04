const blockSize = 100;
const elem = document.querySelector('.block');
const wrapper = document.querySelector('.wrapper')
const caption = document.querySelector('.caption');



const step = 10;
window.addEventListener('keydown',function (e){
    switch (e.keyCode) {
        case 37 : //left
            moveElem(elem , -step , 0);
            break;
        case 38 : //up
            moveElem(elem ,0 , -step );
            break;
        case 40 : //down
            moveElem(elem ,0 , step );
            break;
        case 39 : //right
            moveElem(elem , step , 0);
            break;
        case 32 : //space
            jumpUp(elem);
            break;
        case 17 : //CTRL
            scaleRuffle (elem);
            break;

    }
});

function moveElem(element ,x ,y) {
    const elemStyle = getComputedStyle(element);
    const currentY = parseInt(elemStyle.top);
    const currentX = parseInt(elemStyle.left) ;


    if( (currentX + x) >= 0 &&
        (currentY + y) >= 0 &&
        (currentX + x ) <= wrapper.clientWidth - blockSize &&
        (currentY + y ) <= wrapper.clientHeight - blockSize ) {

        element.style.top = `${currentY + y}px`;
        element.style.left = `${currentX + x}px`;
    } else {
        if( (currentY + y) < 0 ) {
            element.style.top = '20px';
            element.style.left = `${currentX + x}px`;
            showElement(caption);
        }

        if ( (currentX + x) < 0) {
            element.style.top = `${currentY + y}px`;
            element.style.left = '20px';
            showElement(caption);
        }

        if ( (currentX + x + blockSize) > wrapper.clientWidth) {
            element.style.top = `${currentY + y}px`;
            element.style.left = `${wrapper.clientWidth - 20 - blockSize}px`;
            showElement(caption);
        }

        if ( (currentY + y + blockSize) > wrapper.clientHeight) {
            element.style.top = `${wrapper.clientHeight - 20 - blockSize}px`;
            element.style.left = `${currentX + x}px`;
            showElement(caption);
        }
    }
}

function showElement(elem) {
    elem.style.visibility = 'visible';
    setTimeout(() => hideElement(elem), 2000);
}
function hideElement(elem) {
    elem.style.visibility = 'hidden';
}

function scaleRuffle(element) {
    console.log('scaleRuffle');
    element.style.width = `${blockSize * 1.25}px`;
    element.style.height = `${blockSize * 0.6}px`;
    setTimeout(() =>scalePullOff(elem), 500)
}

function scalePullOff(element) {
    element.style.width = `${blockSize}px`;
    element.style.height = `${blockSize}px`;
}

function jumpUp(element) {
    const currentY = parseInt(element.style.top);
    element.style.top = `${currentY - 30}px`;
    setTimeout(() =>jumpDown(elem), 200);
}
function jumpDown(element) {
    const currentY = parseInt(element.style.top);
    element.style.top = `${currentY + 30}px`;
}





