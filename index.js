let elements = document.querySelectorAll('ul > li:last-child');
elements.forEach(item => item.classList.add('last'));


function setFirstItemClassName(level) {
    let liItem = [];
    for (let i = 1 ; i < level ; i++) {
        liItem += '> li > ul'
    }

    let element = document.querySelectorAll(`ul.root ${liItem} > li:first-child`);
    element.forEach(item => item.classList.add('first'));
}

setFirstItemClassName(2);