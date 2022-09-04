const blockSize = 100;
const elem = document.querySelector('.block');
const wrapper = document.querySelector('.wrapper')

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
            moveElem(elem , step , 0);
            break;
        case 17 : //CTRL
            moveCTRL(elem);
            break;

    }
});

function moveElem(element ,x ,y) {
    const elemStyle = getComputedStyle(element);
    const currentY = parseInt(elemStyle.top);
    const currentX = parseInt(elemStyle.left) ;

    console.log('X',`${currentX + x}px`);
    console.log('Y',`${currentY + y}px`);

    if( (currentX + x) >= 0 &&
        (currentY + y) >= 0 ) {

        element.style.top = `${currentY + y}px`;
        element.style.left = `${currentX + x}px`;
        console.log('success');
    } else {
        if( (currentY + y) < 0 ) {
            element.style.top = '20px';
            element.style.left = `${currentX + x}px`;
            console.log('top');
        }

        if ( (currentX + x) < 0) {
            element.style.top = `${currentY + y}px`;
            element.style.left = '20px';
            console.log('left');
        }

        // if ( (currentX + x + blockSize) > wrapper.clientWidth) {
        //     element.style.top = `${currentY + y}px`;
        //     element.style.left = `${wrapper.clientWidth - 20 - blockSize}px`;
        //     console.log('right');
        // }
        //
        // if ( (currentY + y + blockSize) > wrapper.clientHeight) {
        //     element.style.top = `${wrapper.clientWidth - 20 - blockSize}px`;
        //     element.style.left = `${currentX + x}px`;
        //     console.log('down');
        // }

    }

}






