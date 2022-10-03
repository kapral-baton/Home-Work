$.get(
    'https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json',
).then(data => JSON.parse(data))
    .then(data => {
        const block = $('.block');
        console.log(block)

        block.innerHTML = '';

        const button = data.map(item => `<button style="background:${item.color}"</button>`);
        block.innerHTML = button;



});

//







// const url = 'https://mc-astro.github.io/tesla-roadster-colors/img/white.jpg';
// $("img").attr("src", url);






