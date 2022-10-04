$.get(
    'https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json',
).then(data => JSON.parse(data))
    .then(data => {
        const block = $('.block');

        block.html(data.map(item => `<button id="${item.img}" class="${item.title}" style="background:${item.color}"</button>`));

        const button = $('button').each(function (i){
                this.addEventListener('click', changeCar)
        })
});

const changeCar = (e) => {
        const url = 'https://mc-astro.github.io/tesla-roadster-colors/img/';
        $("img").attr("src", url + `${e.target.id}.jpg`);
        console.log(e.target.classList)
        $('.color-div').html(`<p style="color:${e.target.style.background}">Colors</p>`);
        $('.title-div').html(`<p>${e.target.classList}</p>`);

};

$('.color-div').html(`<p style="color:"#2e2e2e">Colors</p>`);
$('.title-div').html(`<p>Solid Black</p>`);
$("img").attr("src", `https://mc-astro.github.io/tesla-roadster-colors/img/black.jpg`);















